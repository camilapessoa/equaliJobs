const express = require("express");
const router = express.Router();
const controller = require('../controller/companyController')

router.post('/signup', controller.createCompany)
router.post('/login', controller.loginCompany)

module.exports = router