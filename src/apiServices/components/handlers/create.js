const express = require("express")
const app = express()

app.post('/component', (req, res) => {
    res.json({ message: "Create a new component!" })
})

module.exports = app;