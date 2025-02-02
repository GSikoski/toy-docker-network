from fastapi import FastAPI, Depends
from typing import Annotated
from fastapi.security import OAuth2PasswordBearer
from ..rest_classes.message import Message, UserCreate, User
from passlib.context import CryptContext
from ..db.db import create_user
import logging
from uuid import uuid4

logger = logging.getLogger("uvicorn")
app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

SECRET_KEY = "f6b6ea644461bf90d533f870fa840c3442b118278a01a06f1c07fd99cc5d1580"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/items/")
async def read_items(token: Annotated[str, Depends(oauth2_scheme)]):
    return {"token": token}


def fake_decode_token(token) -> User:
    return User(name=token, id=1)


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    user = fake_decode_token(token)
    return user


@app.get("/users/me")
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user


@app.post("/send")
async def send(message: Message):

    return {"message": "Recieved"}


@app.post("/sendstr")
async def send(message: str):
    logger.info(f"### Recieved Message: {message}\n")
    return {"message": "Recieved"}


@app.post("/newuser")
async def send(user_create: UserCreate):
    user = User(id=uuid4(), name=user_create.name, messages=[])
    create_user(user)
    return {"message": "Recieved"}


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
