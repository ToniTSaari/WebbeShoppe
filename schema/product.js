const mongoose = require('mongoose');

const product = new mongoose.Schema(
    {
        id:Number,
        name:String,
        price:Number,
        desc:String
    }
)