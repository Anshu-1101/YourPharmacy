from fastapi import APIRouter, HTTPException, Depends, Request, status, Response
from fastapi.responses import JSONResponse
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException

from asyncpg.exceptions import UniqueViolationError
import asyncio

from schema.db import db
from models.model import Login, User, SignUp, ID
from schema.schema import User as UserSchema
from schema.schema import Product as ProductSchema
from schema.schema import cart
from schema.schema import Cart as CartSchema


app = APIRouter()

@app.post('/user/login')
async def login(request: Request,user: Login, Authorize: AuthJWT = Depends()):
    # """
    # create access and refresh token and save it as
    # httponly cookie
    # """
    
    # query = USER.select().where(USER.c.email == user.email)
    # data = await database.fetch_one(query)

    data = await UserSchema.get(user.email)
    if data==None or user.email != data['email'] or user.password != data['password']:
        raise HTTPException(status_code=401,detail="Bad username or password")

    token = Authorize.create_access_token(subject=user.email)
    refresh_token = Authorize.create_refresh_token(subject=user.email)

    Authorize.set_access_cookies(token)
    Authorize.set_refresh_cookies(refresh_token)
    return {"msg":"Successfully login"}
    

@app.post('/refresh')
def refresh(Authorize: AuthJWT = Depends()):
    
    Authorize.jwt_refresh_token_required()

    current_user = Authorize.get_jwt_subject()
    new_access_token = Authorize.create_access_token(subject=current_user)
    Authorize.set_access_cookies(new_access_token)
    return {"msg":"The token has been refresh"}

@app.delete('/user/logout')
def logout(Authorize: AuthJWT = Depends()):
    """
    Because the JWT are stored in an httponly cookie now, we cannot
    log the user out by simply deleting the cookies in the frontend.
    We need the backend to send us a response to delete the cookies.
    """
    Authorize.jwt_required()
    Authorize.unset_jwt_cookies()
    return {"msg":"Successfully logout"}

@app.get('/protected')
def getUser(Authorize: AuthJWT = Depends()):
        Authorize.jwt_required()
        current_user = Authorize.get_jwt_subject()
        return {"email": current_user}
    

@app.post("/user/signup", status_code = status.HTTP_201_CREATED)
async def signup(user: SignUp):
    try:
        # query = USER.insert().values(username=user.username, email=user.email, password=user.password)
        # last_record_id = await database.execute(query)
        # return {**user.dict(), "id": last_record_id}
        user_id = await UserSchema.create(**user.dict())
        return { "user_id": user_id}

    except UniqueViolationError:
        return {"user already exists"}


@app.get("/user/getnavbar")
async def getnavbar(response: Response, Authorize: AuthJWT = Depends()):
    email = getUser(Authorize)['email']
    if (email):
        user = await UserSchema.get(email)
        if (user): return {'name':user['username'], 'admin': user['admin']}
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"No user Found"}

    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"No user Found"}



@app.get("/user/getcart")
async def getnavbar(response: Response, Authorize: AuthJWT = Depends()):
    email = getUser(Authorize)['email']
    if (email):
        user = await UserSchema.get(email)
        if (user): 
            cart_detail = await CartSchema.getAll(user['id'])
            size = len(cart_detail)
            async def iterate(i):
                    temp = {
                        'id': cart_detail[i]['id'],
                        'quantity': cart_detail[i]['quantity'],
                        'product': await ProductSchema.get(cart_detail[i]['productid'])
                    }
                    return temp
            data = [iterate(i) for i in range(size)]
            return await asyncio.gather(*data)
            
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"No user Found"}

    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"No user Found"}


@app.post('/user/removefromcart')
async def removefromcart(id: ID):
    query = cart.delete().where(cart.c.id == id.id)
    status = await db.execute(query)
    return status
    

@app.post("/user/addtocart")
async def addtocart(id: ID, request: Request,response: Response, Authorize: AuthJWT = Depends()):
    email = getUser(Authorize)['email']
    if (email):
        print("id printed: ", id.id)
        user = await UserSchema.get(email)
        product = await ProductSchema.get(id.id)

        cart_content = await CartSchema.get(product['id'])
        if (cart_content): 
            query = cart.update().where(cart.c.id == cart_content['id']).values(quantity=cart_content['quantity']+1)
            res = await db.execute(query)
            return res

        if (user and product): 
            # data = {'userid':user['id'], 'productid':product['id'], 'quantity':1 }
            # cart_id = await CartSchema.create(data)    
            query = cart.insert().values(userid=user['id'], productid=product['id'], quantity=1)
            cart_id = await db.execute(query)
            #return {**user.dict(), "id": last_record_id}
            return {"cart_id": cart_id}
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"No user Found"}

    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"No user Found"}
