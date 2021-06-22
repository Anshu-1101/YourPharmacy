import databases
import sqlalchemy


DATABASE_URL = "postgresql://postgres:postgres@db:5432"

db = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# USER = sqlalchemy.Table(
#     "users",
#     metadata,
#     sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
#     sqlalchemy.Column("username", sqlalchemy.String, unique=True),
#     sqlalchemy.Column("email", sqlalchemy.String, unique=True),
#     sqlalchemy.Column("password", sqlalchemy.String),
#     # sqlalchemy.Column("admin", sqlalchemy.Boolean, detail=False),
# )

# engine = sqlalchemy.create_engine(
#     DATABASE_URL, pool_size=3, max_overflow=0
# )

# metadata.create_all(engine)
