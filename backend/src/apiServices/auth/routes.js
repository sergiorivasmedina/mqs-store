const login = require('./handlers/login')

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, login)

module.exports = router;