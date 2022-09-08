const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const productsControllers = require('../controllers/products')

const router = express.Router();

router.get('/', productsControllers.getProducts);

module.exports = router;
