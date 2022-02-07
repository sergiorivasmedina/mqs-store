const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const User = require('../../users/user.model');

app.get('/user/availableBrands', async (req, res) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: 'No se ingresó token' });
    }
    const accessToken = authorization.split(' ')[1];

    try {
        const { user } = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        const currentUser = await User.findById(user._id);
        res.json(currentUser.availableBrands);
    } catch(error) {
        res.status(401).json({ message: 'Token no autorizado' });
    }
})

module.exports = app;