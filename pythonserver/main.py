from models.model import Settings
from schema.db import db
from app import app
from schema.db import db


import uvicorn

from routers import user, authentications, products, doctors

app.include_router(user.app)
app.include_router(doctors.app)
app.include_router(products.app)
app.include_router(authentications.app)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)