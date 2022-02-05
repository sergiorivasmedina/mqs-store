const express = require("express");
const app = express();

const Brand = require('../../brand.model');
const Item = require('../../../componentDetails/componentDetail.model');
const { deleteFileStream } = require('../../../../common-middleware');

app.delete('/brand/:id', async (req, res) => {
    const idBrand = req.params.id;
    const precondition_failed = 'Existen items asignados a esta marca. Se requiere eliminar primero esos items y luego la marca.';

    // validar que no tenga dependencias con componentes
    const items = await Item.find({ idBrand: idBrand });

    // eliminar marca: fotos y luego registro
    if (items.length) {
        res.status(412).json({ message: precondition_failed });
    } else {
        // no tiene dependencias

        // validar si tiene fotos
        const brand = await Brand.findById(idBrand);
        if (brand.photos.length > 0) {
            deleteFileStream(brand.photos[0]);
        }

        await Brand.deleteOne({ _id: idBrand });
        res.status(200).json({ message: `${brand.description} eliminado.` });
    }
})

module.exports = app;