const express = require('express');
const router = express.Router();
const { getManifest } = require('../controllers/mars.controller');
//COMPLETE the router
router.get('/manifests/:roverName', getManifest);

module.exports = router;
