from pydantic import BaseModel
from sqlalchemy.sql.sqltypes import Boolean
from typing import Optional

class Login(BaseModel): 
    email: str
    password: str
    class Config:
        orm_mode = True

class ID(BaseModel):
    id: int
    
class SignUp(BaseModel):
    username: str
    email: str
    password: str
    admin : Optional[bool] = False

class Product(BaseModel):
    name: str
    composition: str
    quantity: int 
    price: float
    url: str
    brandname: str

class Doctor(BaseModel):
    name: str
    image: str
    specialisation: str
    designation: str
    location: str
    fee: float

class User(BaseModel):
    id: int
    username: str
    email: str
    password: str
    admin: bool = False
    class Config:
        orm_mode = True

class Settings(BaseModel):
    authjwt_secret_key: str = "secret"
    authjwt_token_location: set = {"cookies"}
    authjwt_cookie_csrf_protect: bool = False