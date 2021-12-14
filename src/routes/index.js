const brands = require('../apiServices/brands/routes');
const components = require('../apiServices/components/routes');
const components_details = require('../apiServices/component_details/routes');

var express = require('express');
var router = express.Router();

const ENDPOINT_API = '/api'

router.use(ENDPOINT_API, brands);
router.use(ENDPOINT_API, components);
router.use(ENDPOINT_API, components_details)

module.exports = router;