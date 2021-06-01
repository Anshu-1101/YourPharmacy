const User = require('../models/user.js');
const Appointment = require('../models/appointment.js')
const Doctor = require('../models/doctor.js')
const mongoose = require('mongoose');


const getAppointment = async (request, response) => {
    try{
        const session = await mongoose.startSession();
        session.startTransaction();

        const email = request.email;
        const user = await User.findOne({email})
        if (!user) return response.status(404).send( "User not found!" + error )

        const appointment = await Appointment.find({"userId": user._id})
        console.log(appointment)

        var appointments = await Promise.all(appointment.map(async (data)=>{
            let doctor = await Doctor.findById(data.doctorId);
            return {doctor, "date": data.date, "time":data.time}
          }))
          console.log(appointments)
        response.status(200).send(appointments);
        session.endSession();

    }catch (error){
        response.status(500).send("Error Occured " + error);
    }
}

const addAppointment = async (request, response) => {
    try{
        const session = await mongoose.startSession();
        session.startTransaction();

        let {time, date, id} = request.body;
        const email = request.email;

        const user = await User.findOne({email})
        if (!user) return response.status(404).json({message: "Invalid user", verify: false})

        const doctor = await Doctor.findById(id);
        if (!doctor) return response.status(404).json({message: "Invalid doctor id", verify: false})

        time = time.substr(0,2) + Math.floor(parseInt(time.substr(3,5))/15)*15;
        date = date.replace(/-/g, '');
        
        const key =  date + time;
        console.log(time, date, key, request.body)
        const appoint = await Appointment.findOne({key})
        
        if (appoint){
            session.abortTransaction()
            return response.status(404).json({message: "Slot not available!", verify: false})
        }

        await Appointment.create({
            key, doctorId: id, userId: user._id, time, "time":request.body.time, "date":request.body.date
        })
        response.status(200).send("Appointment Scheduled successfulled")
        session.endSession();
    }catch(error){
        response.status(500).send("Error Occured " + error);
    } 
  }

module.exports = {addAppointment, getAppointment}