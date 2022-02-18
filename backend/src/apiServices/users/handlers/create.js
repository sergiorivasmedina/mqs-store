const express = require("express")
const app = express()
const bcrypt = require('bcrypt')

const User = require('../user.model')

app.post('/user', async (req, res) => {
  const { name, lastName, mail, password, cellphone, companyName, ruc, status, idRole, availableBrands } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
      name: name,
      lastName: lastName,
      mail: mail,
      password: hashedPassword,
      cellphone: cellphone,
      companyName: companyName,
      ruc: ruc,
      status: status,
      idRole: idRole,
      availableBrands: availableBrands
    })
    await user.save()
    res.status(201).json({ name, lastName, mail, cellphone, companyName, ruc, status, idRole, availableBrands })
  } catch {
    res.status(500).json({ message: 'Error creating new user.' })
  }
})

module.exports = app;