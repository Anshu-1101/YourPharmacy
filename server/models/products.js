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
})

const Product = mongoose.model('productData', productSchema);
module.exports = Product;