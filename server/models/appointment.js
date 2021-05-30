const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String,
    doctorId: String,
    key: String,
    time: String,
    date: String
},{ timestamps: true });

const Appointment = mongoose.model('appointment', userSchema);

module.exports = Appointment;