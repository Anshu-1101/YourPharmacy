const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name :  {
        type: String,
        required: true,
        trim: true,
    },
    composition:{
        type: String,
    },
    price: {
        type: String,
    },
    brandname: {
        type:  String,
    },
    quantity: {
        type: Number,
    },
    url:{
       type: String,
    }
})

const Product = mongoose.model('productData', productSchema);
module.exports = Product;