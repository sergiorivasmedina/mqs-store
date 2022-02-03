const createRole = require('./handlers/create');
const findById = require('./handlers/findById');
const findAll = require('./handlers/findAll');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1';

router.use(VERSION_1, createRole);
router.use(VERSION_1, findById);
router.use(VERSION_1, findAll);

module.exports = router;