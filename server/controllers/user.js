const { response, request } = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const User = require('../models/user.js');
const Product = require('../models/products.js');
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
        
        const id = request.body.id;
        const product = await Product.findById(id)
        if (product.quantity == 0) {
          product.close()
          return
        }
        
        var isPresent = false
        for(let i=0; i<user.cart.length; i++){
          let data = user.cart[i];
          console.log(data, data.id == id)
          if (data.id == id){
             user.cart[i].quantity++;
             user.save();
             response.status(200).send("Quantity increased!");
             return;
          }

        }

        const re = {id, quantity:1}
        user.cart.push(re);
        const data = await user.save();
        
        response.status(200).send("Added to cart successfully");

    }catch(error){
        console.log(error)
        response.status(500).send("request Failed: "+error);
    }
  }
  
  const removeFromCart = async (request, response) => {
    try{
      
      const email = request.email
      const user = await User.findOne({email})
      if (!user) response.status(404).send("User not Found")
      console.log(request.body)
      const {id} = request.body;
      user.cart = user.cart.filter((item) => {
        return (item.id!= id)
      })
      await user.save()
      response.status(200).send("Removed From Cart successfully")

    }catch(error){
      response.status(200).send("Request Failed " + error);
    }
  }

  const getCart = async (request, response) => {
    try{
        const email = request.email;
        const user = await User.findOne({email})
        if (!user)  response.status(404).send("User not found")
        var product = await Promise.all(user.cart.map(async (data)=>{
          return await Product.findById(data.id)
        }))
        response.status(200).send(product);
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

  module.exports = {logIn, signUp, addtoCart, getCart, getNavbar, removeFromCart, logOut};