const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)

server.listen(3000, () => {
    console.log(server.address().port)
})

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})