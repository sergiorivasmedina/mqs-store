const brands = require('../apiServices/brands/routes');
const components = require('../apiServices/components/routes');
const components_details = require('../apiServices/componentDetails/routes');
const roles = require('../apiServices/roles/routes')
const users =  require('../apiServices/users/routes')

var express = require('express');
var router = express.Router();

const ENDPOINT_API = '/api'

router.use(ENDPOINT_API, brands)
router.use(ENDPOINT_API, components)
router.use(ENDPOINT_API, components_details)
router.use(ENDPOINT_API, roles)
router.use(ENDPOINT_API, users)

module.exports = router;