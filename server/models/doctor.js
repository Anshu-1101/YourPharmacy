const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name :  {
        type: String,
        required: true,
        trim: true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
    specialisation:{
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_NZykul07nU3cliFuRZQr4_q-gOdkRTmRA&usqp=CAU"
    },
    fee: {type: String}
    
})

const Doctor = mongoose.model('doctorData', DoctorSchema);
module.exports = Doctor;