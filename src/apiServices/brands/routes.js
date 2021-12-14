const findAllBrands = require('./handlers/findAll');
const findOneBrand = require('./handlers/findById');
const createBrand = require('./handlers/create');
const updateBrand = require('./handlers/update');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, findAllBrands);
router.use(VERSION_1, findOneBrand);
router.use(VERSION_1, createBrand);
router.use(VERSION_1, updateBrand);

module.exports = router;