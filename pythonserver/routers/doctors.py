from fastapi import APIRouter, HTTPException, Depends, Request, status, Response


from schema.db import db
from models.model import Doctor
from schema.schema import Doctor as DoctorSchema

app = APIRouter()

@app.get('/doctors/getdoctors')
async def getdoctors():
    doctors = await DoctorSchema.getAll()
    if doctors:
        return doctors
    else:
        return []

@app.post('/doctors/adddoctor')
async def adddoctors(doctor: Doctor):
    doctor_id = await DoctorSchema.create(**doctor.dict())
    return { "doctor_id": doctor_id}