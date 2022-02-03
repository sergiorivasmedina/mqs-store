const createUser = require('./handlers/create')
const findById = require('./handlers/findById')
const findAll = require('./handlers/findAll')
const update = require('./handlers/update')

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, createUser)
router.use(VERSION_1, findById)
router.use(VERSION_1, findAll)
router.use(VERSION_1, update)

module.exports = router;