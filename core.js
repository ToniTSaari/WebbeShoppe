const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const server = require('http').createServer(app)
const time = require('./control/serverTime')

app.use(cors('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'))
const corsOp = 
{
    origin: "http://localhost:4200",
    optionSuccessStatus: 200
}

server.listen(3000, () => {
    time.time()
    console.log(server.address().port)
})

var url = "mongodb://localhost:27017/ogl"

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })

app.get("/time", cors(corsOp), function(req,res)
{
    const clock = time.clock()
    console.log('time request get')
    console.log(clock)
    res.json(clock)
})