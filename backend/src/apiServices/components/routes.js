const findAll = require('./handlers/findAll');
const createComponent = require('./handlers/create');
const updateComponent = require('./handlers/update');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, findAll);
router.use(VERSION_1, createComponent)
router.use(VERSION_1, updateComponent)

module.exports = router;