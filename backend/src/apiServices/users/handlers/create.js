const express = require("express")
const app = express()
const bcrypt = require('bcrypt')

const User = require('../user.model')

app.post('/user', async (req, res) => {
    const { name, mail, password, ruc, status, idRole, availableBrands } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name: name, 
            mail: mail, 
            password: hashedPassword, 
            ruc: ruc, 
            status: status, 
            idRole: idRole, 
            availableBrands: availableBrands })
        await user.save()
        res.status(201).json({ name, mail, ruc, status, idRole, availableBrands })
      } catch {
        res.status(500).send()
      }
})

module.exports = app;