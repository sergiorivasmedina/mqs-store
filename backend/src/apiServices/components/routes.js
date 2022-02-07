const findAll = require('./handlers/findAll');
const createComponent = require('./handlers/create');
const updateComponent = require('./handlers/update');
const deleteComponent = require('./handlers/delete');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, findAll);
router.use(VERSION_1, createComponent);
router.use(VERSION_1, updateComponent);
router.use(VERSION_1, deleteComponent);

module.exports = router;