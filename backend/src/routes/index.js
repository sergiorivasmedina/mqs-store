const brands = require('../apiServices/brands/routes');
const components = require('../apiServices/components/routes');
const components_details = require('../apiServices/componentDetails/routes');
const roles = require('../apiServices/roles/routes');
const users =  require('../apiServices/users/routes');

const loginUser = require('../apiServices/auth/routes');

const utils = require('../apiServices/utils/routes');

var express = require('express');
var router = express.Router();

const ENDPOINT_API = '/api'
const ENDPOINT_AUTH = '/auth'

router.use(ENDPOINT_API, brands);
router.use(ENDPOINT_API, components);
router.use(ENDPOINT_API, components_details);
router.use(ENDPOINT_API, roles);
router.use(ENDPOINT_API, users);

router.use(ENDPOINT_AUTH, loginUser);

router.use(ENDPOINT_API, utils);

module.exports = router;