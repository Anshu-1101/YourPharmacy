from fastapi import APIRouter, HTTPException, Depends, Request, status, Response


from schema.db import db
from models.model import Product
from schema.schema import Product as ProductSchema

app = APIRouter()

@app.get('/products/getproducts')
async def getproducts():
    products = await ProductSchema.getAll()
    if products:
        return products
    else:
        return []

@app.post('/products/addproduct')
async def addproducts(product: Product):
    product_id = await ProductSchema.create(**product.dict())
    return { "product_id": product_id}