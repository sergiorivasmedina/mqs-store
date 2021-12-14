const findById = require('./handlers/findByIdBrand');
const createComponent = require('./handlers/create');
const updateComponent = require('./handlers/update');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, findById);
router.use(VERSION_1, createComponent)
router.use(VERSION_1, updateComponent)

module.exports = router;