
const express = require("express");
const router = express.Router();
const controller = require('../controller/accountController')

router.post('/signup', controller.createUser)
router.post('/login', controller.login)

module.exports = router