const { response, request } = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const User = require('../models/user.js');
const Product = require('../models/products.js');
const generateToken = require('../helpers/generatetoken.js');


dotenv.config();


const logIn = async (request, response) => {
  
    const { email, password } = request.body;
    console.log("got data", email, password);
    try {
  
      if(email === "" || password === "")
        return response.status(404).json({ message : "Invalid Credentials", verify : false });
  
      const oldUser = await User.findOne({ email });
      if (!oldUser)
        return response.status(404).json({ message: "Invalid Credentials", verify : false });
  
      const userDetailsByName = await User.findOne({ email });
  
      const isEqual = await bcrypt.compare(password, userDetailsByName.password);
  
      if(!isEqual)
        return response.status(404).json({ message : "Invalid Credentials", verify : false });
  
      const token = await generateToken(response, email, userDetailsByName._id);
      response
        .cookie("token", token, { httpOnly : true })
        .send(email);
  
    }
    catch (error) {
      console.log(error);
      response.status(500).json({ message: error });
    }
  }

  const signUp = async (request, response) => {

    const {email, password, phoneNumber, name} = request.body;
    console.log(request.body)
    try{
        var userDetails = await User.findOne({ email })
        if (userDetails){
            return response.status(400).json({msg: 'Email already in exists!'})
        }
        var salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const userDetailsByEmail = await User.create({
            email,
            name,
            password: hashedPassword,
            phoneNumber,
        })
        const token = await generateToken(response, email, userDetailsByEmail._id);
        response
            .cookie("token", token, { httpOnly : true })
            .send(email);

    }catch (error) {
        console.log(error);
        response.status(500).json({ message: error });
    }
  }


  const addtoCart = async (request, response) => {
    try{
        const email = request.email;
        const user = await User.findOne({email})

        if (!user)  response.status(404).send("User not found")

        const {productid} = request.body.product;
        const product = await Product.findById(productid)
        console.log(product)
        user.cart.push(product);

        const status = await user.save();
        // const status = await User.findByIdAndUpdate(user._id, item, {new: true})
        console.log(status)
        response.status(200).send("Added to card successfully");
    }catch(error){
        response.status(500).send("request Failed: "+error);
    }
  }
  
  const getCart = async (request, response) => {
    try{
        const email = request.email;
        const user = await User.findOne({email})
        if (!user)  response.status(404).send("User not found")

        response.status(200).send(user.cart);
    }catch(error){
        response.status(500).send("request Failed: "+error);
    }
  }

  const getNavbar = async (request, response) => {
    try{
        const email = request.email;
        const user = await User.findOne({email})
        if (!user)  response.status(404).send("User not found")
        response.status(200).send({
          "pic" : user.userProfilePic.filePath,
          "name": user.name
         })
        
    }catch(error){
        response.status(500).send("request Failed: "+error);
    }
  }

  const logOut = async (request, response) => {
  
    try {
      response.clearCookie("token");
      response.status(200).json({ message : "User has logged out" });
    } catch (error) {
      console.log(error);
      response.status(500).json({ message : error });
    }
  }

  module.exports = {logIn, signUp, addtoCart, getCart, getNavbar, logOut};