const findByGroup = require('./handlers/findByGroup');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, findByGroup);

module.exports = router;