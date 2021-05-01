const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        unique: true,
        required: true,
        trim : true,
    },
    name: { 
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    userProfilePic : {
        filePath : {
            type : String,
            default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_NZykul07nU3cliFuRZQr4_q-gOdkRTmRA&usqp=CAU",
        },
    },
    
    disableUser : {
        type: Boolean,
        default: false,
    },
    cart : [{
        _id : { type: String},
        name :  {
            type: String,
            required: true,
            trim: true,
        },
        composition:{
            type: String,
        },
        price: {
            type: Number,
        },
        brand: {
            type: {
                name: String,
            },
        },
        quantity: {
            type: Number,
        }
    }],
    cartViewed : {
        type : Boolean,
        default : false,
    },
    userLastVisit : {
        date : {
            date : Number,
            month : Number,
            year : Number,
        },
        time : {
            minutes : Number,
            hours : Number,
        },
        dayCount : Number,
        userWeek : Number,
    },
},{ timestamps: true });

const User = mongoose.model('userdata', userSchema);

module.exports = User;