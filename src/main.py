from fastapi import FastAPI
import sys
from rest_classes.message import Message
import logging

logger = logging.getLogger("uvicorn")
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/send")
async def send(message: Message):
    logger.info(f"### Recieved Message: {message.message}\n")
    return {"message": "Recieved"}

@app.post("/sendstr")
async def send(message: str):
    logger.info(f"### Recieved Message: {message}\n")
    return {"message": "Recieved"}


