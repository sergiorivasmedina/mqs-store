const findAllBrands = require('./handlers/v1/findAll');
const findOneBrand = require('./handlers/v1/findById');
const createBrand = require('./handlers/v1/create'); // deprecated
const updateBrand = require('./handlers/v1/update'); // deprecated

const updateBrandV2 = require('./handlers/v2/update');
const createBrandV2 = require('./handlers/v2/create');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'
const VERSION_2 = '/v2'

router.use(VERSION_1, findAllBrands);
router.use(VERSION_1, findOneBrand);
router.use(VERSION_1, createBrand);
router.use(VERSION_1, updateBrand);

router.use(VERSION_2, updateBrandV2);
router.use(VERSION_2, createBrandV2);

module.exports = router;