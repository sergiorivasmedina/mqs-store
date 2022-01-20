// v1
const findByIdComponent = require('./handlers/v1/findByIdComponent');
const findByIdBrand = require('./handlers/v1/findByIdBrand');
const createComponent = require('./handlers/v1/create');
const updateComponent = require('./handlers/v1/update');
const findAll = require('./handlers/v1/findAll');

// v2
const updateComponentV2 = require('./handlers/v2/update');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'
const VERSION_2 = '/v2'

router.use(VERSION_1, findByIdComponent);
router.use(VERSION_1, findByIdBrand);
router.use(VERSION_1, createComponent);
router.use(VERSION_1, updateComponent);
router.use(VERSION_1, findAll);

router.use(VERSION_2, updateComponentV2);

module.exports = router;