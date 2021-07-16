const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const server = require('http').createServer(app)

server.listen(3000, () => {
    console.log(server.address().port)
})

var url = "mongodb://localhost:27017/ogl"

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname, './public/index.html'))
})