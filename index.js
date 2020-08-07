const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

// parse application/json
app.use(bodyParser.json())

moviesApi(app)

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`)
})