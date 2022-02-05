const express = require("express")
const app = express()

const ComponentDetail = require('../../componentDetail.model')
const { deleteFileStreamList } = require('../../../../common-middleware');

app.delete('/component-detail/:id', async (req, res) => {
    const id = req.params.id;
    const item = await ComponentDetail.findById(id);
    if (item.photos.length > 0) {
        deleteFileStreamList(item.photos);
    }
    await ComponentDetail.deleteOne({ _id: id });
    res.status(200).send({ message: `item ${item.description} deleted.` });
})

module.exports = app;