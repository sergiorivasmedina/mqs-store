const express = require("express")
const morgan = require('morgan');
const app = express()
const cors = require('cors')

var indexRouter = require('./routes/index')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/', indexRouter);

// BD connection
const { mongoose } = require('./config/database');

// set por, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

module.exports = app;