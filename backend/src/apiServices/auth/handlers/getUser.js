const express = require("express");
const app = express();
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

app.get('/profile', async (req, res) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: 'No se ingresó token' });
    }
    const accessToken = authorization.split(' ')[1];

    try {
        const { user } = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        res.json({
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            mail: user.mail,
            status: user.status,
            idRole: user.idRole,
            cellphone: user.cellphone,
            companyName: user.companyName,
            ruc: user.ruc
        });
    } catch(error) {
        res.status(401).json({ message: 'Token no autorizado' });
    }
})

module.exports = app;