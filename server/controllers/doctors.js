const { response, request } = require('express');
const mongoose = require('mongoose');
const Doctors = require('../models/doctor.js')
const dotenv = require('dotenv');
dotenv.config();

const getDoctors = async (request, response) => {
    
    try{
        
        const Doctordata = await Doctors.find();
        const doctors = [];

        for (let i=0; i<Doctordata.length; i++){
            doctors.push(Doctordata[i]);
        }
        response.status(200).send(doctors);

    }catch(error){
        console.log(error);
        response.status(500).json({ message: error.message });
    }
}

const addDoctors = async (request, response) => {
    try{
        const item = request.body;
        Doctors.create({...item})
        // Product.create({
        //     name: item.name, 
        //     composition: item.composition, 
        //     price: item.price,
        //     brand: {
        //         name: item.brand.name,
        //     },
        //     quantity: item.quantity
        // })
        response.status(200).send("Item added Successfully")
    }catch(error){
        response.status(500).send("Request Failed: " + error)
    }
}

module.exports = {getDoctors, addDoctors};