from pydantic import BaseModel
from typing import List
from uuid import UUID

class Message(BaseModel):
    id: UUID
    sender_id: UUID
    recipient_id: UUID
    message: str

class User(BaseModel):
    id: UUID
    name: str
    messages: List[Message]

class UserCreate(BaseModel):
    name: str

