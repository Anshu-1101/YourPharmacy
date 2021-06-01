const { response, request } = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const User = require('../models/admin.js');
const generateToken = require('../helpers/generatetoken.js');


dotenv.config();


const logIn = async (request, response) => {
  
    const { email, password } = request.body;
    
    try {
  
      if(email === "" || password === "")
        return response.status(404).json({ message : "Invalid Credentials", verify : false });
  
      const oldUser = await User.findOne({ email });
      if (!oldUser)
        return response.status(404).json({ message: "Invalid Credentials", verify : false });
  
      const userDetailsByName = await User.findOne({ email });
      if (!userDetailsByName.admin){
          response.status(404).send("Admin not found");
      }
      const isEqual = await bcrypt.compare(password, userDetailsByName.password);
  
      if(!isEqual)
        return response.status(404).json({ message : "Invalid Credentials", verify : false });
                
      const token = generateToken(response, email, userDetailsByName._id);
      response
        .cookie("token", token, { httpOnly : true })
        .send(email);
  
    }
    catch (error) {
      console.log(error);
      response.status(500).json({ message: error });
    }
  }


module.exports = {logIn};