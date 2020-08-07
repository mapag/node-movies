const express = require('express')
const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

const { logErrors, errorHandler, wrapError } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')
// parse application/json
app.use(express.json())

moviesApi(app)

// Error middleware
app.use(logErrors)
app.use(wrapError)
app.use(errorHandler)

// Catch 404
app.use(notFoundHandler)

app.listen(config.port, function () {
    // eslint-disable-next-line no-console
    console.log(`Listening http://localhost:${config.port}`)
})