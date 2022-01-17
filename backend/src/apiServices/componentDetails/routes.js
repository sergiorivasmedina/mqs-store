const findByIdComponent = require('./handlers/findByIdComponent');
const findByIdBrand = require('./handlers/findByIdBrand');
const createComponent = require('./handlers/create');
const updateComponent = require('./handlers/update');
const findAll = require('./handlers/findAll')

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, findByIdComponent);
router.use(VERSION_1, findByIdBrand);
router.use(VERSION_1, createComponent);
router.use(VERSION_1, updateComponent);
router.use(VERSION_1, findAll);

module.exports = router;