from fastapi import APIRouter, HTTPException, Depends, Response, status
from fastapi_jwt_auth import AuthJWT
app = APIRouter()

@app.get("/authentications/verify")
def verify(response: Response, Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
        current_user = Authorize.get_jwt_subject()
        response.status_code = status.HTTP_200_OK
        return {'tokenVerified': True}
    except:
        response.status_code = status.HTTP_200_OK
        return {'tokenVerified': False}
