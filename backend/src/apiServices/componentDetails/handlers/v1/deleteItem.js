const express = require("express")
const app = express()

const ComponentDetail = require('../../componentDetail.model')

app.delete('/component-detail/:id', async (req, res) => {
    const id = req.params.id;
    await ComponentDetail.deleteOne({ _id: id });
    res.status(200).send('item ' + id + ' deleted');
})

module.exports = app;