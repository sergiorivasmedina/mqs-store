const login = require('./handlers/login');
const register = require('./handlers/register');
const getUser = require('./handlers/getUser');

var express = require('express');
var router = express.Router();

const VERSION_1 = '/v1'

router.use(VERSION_1, login);
router.use(VERSION_1, register);
router.use(VERSION_1, getUser);

module.exports = router;