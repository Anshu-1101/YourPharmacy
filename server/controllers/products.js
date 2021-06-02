const { response, request } = require('express');
const mongoose = require('mongoose');
const Product = require('../models/products.js')
const dotenv = require('dotenv');
dotenv.config();

const getProducts = async (request, response) => {
    
    try{
        const Productdata = await Product.find();
        const products = [];

        for (let i=0; i<Productdata.length; i++){
            products.push(Productdata[i]);
        }
        response.status(200).send(products);

    }catch(error){
        console.log(error);
        response.status(500).json({ message: error.message });
    }
}

const addProduct = async (request, response) => {
    try{
        const item = request.body;
        console.log(request.body)
        Product.create({...item})
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

module.exports = {getProducts, addProduct};