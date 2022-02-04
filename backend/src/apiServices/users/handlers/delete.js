const express = require("express")
const app = express()

const User = require('../user.model')

app.delete('/user/:id', async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send(`user with id: ${req.params.id} deleted`);
})

module.exports = app;