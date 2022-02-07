const express = require("express");
const app = express();

const Component = require('../component.model');
const Item = require('../../componentDetails/componentDetail.model');

app.delete('/component/:id', async (req, res) => {
    const idComponent = req.params.id;
    const precondition_failed = 'Existen items asignados a este componente. Se requiere eliminar primero esos items y luego este componente.';

    // validar que no tenga dependecias con items
    const items = await Item.find({ idComponent: idComponent });

    // eliminar component si no tiene dependencias sino mandar error
    if (items.length) {
        res.status(412).json({ message: precondition_failed });
    } else {
        // no tiene dependencias
        await Component.deleteOne({ _id: idComponent });
        res.status(200).json({ message: `Componente eliminado.` });
    }
})

module.exports = app;