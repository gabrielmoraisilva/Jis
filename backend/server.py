from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Conexão com MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Configuração de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Limitador de requisições
limiter = Limiter(key_func=get_remote_address)


# Gerenciador de ciclo de vida (substitui o @app.on_event("shutdown") deprecado)
@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    client.close()


# Cria a aplicação principal com lifespan
app = FastAPI(lifespan=lifespan)

# Anexa o limitador de requisições ao estado da app
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS — usar origens explícitas, nunca wildcard com credenciais
origins = os.environ.get('CORS_ORIGINS', 'http://localhost:3000').split(',')

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Cria um router com o prefixo /api
api_router = APIRouter(prefix="/api")


# Definição dos modelos
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignora o campo _id do MongoDB
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Rotas adicionadas ao router (não diretamente à app)
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
@limiter.limit("10/minute")
async def create_status_check(request: Request, input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Converte para dict e serializa datetime em string ISO para o MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclui o campo _id do MongoDB dos resultados da consulta
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Converte timestamps em string ISO de volta para objetos datetime
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Inclui o router na app principal (DEPOIS do middleware)
app.include_router(api_router)