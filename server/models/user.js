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
    userOTP : {
        type : String,
        default : '',
    },
    userProfilePic : {
        filePath : {
            type : String,
            default : "",
        },
        fileMimeType : {
            type : String,
            default : "",
        },
    },
    
    disableUser : {
        type: Boolean,
        default: false,
    },
    cart : [{
        title : {
            type : String,
        },
        brand:{
            type: String,
        },
        quantity : {
            type : String,
        },
        url : {
            type : String,
        },
        itemLink : {
            type : String,
        },
        itemTime : {
            type : String,
        },
        itemDate : {
            type : String,
        },
        price : {
            type : Number,
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