const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const { createUser, loginUser } = require('../controllers/userController')

router.route('/users').post(createUser)
router.route('/users/login', auth).post(loginUser)

module.exports = router