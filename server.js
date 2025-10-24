const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js')
const app = express() // creates the web app server

// enable parsing of post request body
app.use(bodyParser.urlencoded({ extended: false }))

// set location for static files like css, js, and images
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// set folder for views (templates)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // use handlebars as the view engine

// send all requests to indexRouter for handling
app.use('/', indexRouter)

// start the server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('server is running on port', server.address().port)
})
