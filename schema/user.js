const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        email:String,
        password:String,
        card:
        {
            number:Number,
            name:String,
            expiration:Number
        },
        wallet:Number,
        basket:[Number]
    }
)