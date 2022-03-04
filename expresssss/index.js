/**
 * Express.js module in node.js
 * Things to keep in mind:
 *  - Express is a framework for creating server side applications in node.js
 *  - Install express using: npm install express
 *  - The express() function returns an instance of the express application
 */

// import express module from node_modules
const express = require('express')
const app = express()

// Some general server response codes
// 200 : everything alright
// 404 : content not found
// 500~: server side error

// Gets the express app ready to deal with json data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// makes the static folder avaiable
app.use(express.static('static'))

// get method accessed using browser
app.get('/kartik', function (req, res) {
    res.send('hi')
    res.end()
})

// post method accessed using apps like postman
app.post('/post', function (req, res) {
    res.send('hi')
    res.end()
})

// server listens on port 8080
app.listen(8080)