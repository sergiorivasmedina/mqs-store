const express = require("express")
const app = express()

const User = require('../user.model')

app.get('/users', async (_req, res) => {
    const users = await User.find().select('name mail ruc idRole status')
    res.json(users)
})

module.exports = app;