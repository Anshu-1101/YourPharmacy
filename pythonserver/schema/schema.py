from schema.db import sqlalchemy, metadata, db

# Base = declarative_base()

users = sqlalchemy.Table(
    "users",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("username", sqlalchemy.String, unique=True),
    sqlalchemy.Column("email", sqlalchemy.String, unique=True),
    sqlalchemy.Column("password", sqlalchemy.String),
    sqlalchemy.Column("admin", sqlalchemy.Boolean, server_default='0'),
)

products = sqlalchemy.Table(
    "products",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String, unique=True),
    sqlalchemy.Column("composition", sqlalchemy.String),
    sqlalchemy.Column("brandname", sqlalchemy.String),
    sqlalchemy.Column("price", sqlalchemy.Float),
    sqlalchemy.Column("quantity", sqlalchemy.Integer),
    sqlalchemy.Column("url", sqlalchemy.String),
)

doctors = sqlalchemy.Table(
    "doctors",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("specialisation", sqlalchemy.String),
    sqlalchemy.Column("designation", sqlalchemy.String),
    sqlalchemy.Column("location", sqlalchemy.String),
    sqlalchemy.Column("fee", sqlalchemy.Float),
    sqlalchemy.Column("image", sqlalchemy.String),
)

cart = sqlalchemy.Table(
    'cart',
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("userid", sqlalchemy.Integer, sqlalchemy.ForeignKey('users.id')),
    sqlalchemy.Column("productid", sqlalchemy.Integer, sqlalchemy.ForeignKey('products.id')),
    sqlalchemy.Column("quantity", sqlalchemy.Integer)

)

class Cart:
    @classmethod
    async def getAll(cls, id: int):
        query = cart.select().where(cart.c.userid == id)
        cart_detail = await db.fetch_all(query)
        return cart_detail
    
    @classmethod
    async def get(cls, id: int):
        query = cart.select().where(cart.c.id == id)
        cart_detail = await db.fetch_one(query)
        return cart_detail
    
    @classmethod
    async def create(cls, **data):
        query = doctors.insert().values(**data)
        cart_id = await db.execute(query)
        return cart_id
    



class Doctor:
    @classmethod
    async def create(cls, **doctor):
        query = doctors.insert().values(**doctor)
        doctor_id = await db.execute(query)
        return doctor_id
    
    @classmethod
    async def getAll(cls):
        query = doctors.select()
        doctor = await db.fetch_all(query)
        return doctor

class Product:
    @classmethod
    async def create(cls, **product):
        query = products.insert().values(**product)
        product_id = await db.execute(query)
        return product_id
    
    @classmethod
    async def getAll(cls):
        query = products.select()
        user = await db.fetch_all(query)
        return user
    
    @classmethod
    async def get(cls, id):
        query = products.select().where(users.c.id == id)
        product = await db.fetch_one(query)
        return product


class User:
    @classmethod
    async def get(cls, email):
        query = users.select().where(users.c.email == email)
        user = await db.fetch_one(query)
        return user

    @classmethod
    async def create(cls, **user):
        query = users.insert().values(**user)
        user_id = await db.execute(query)
        return user_id


