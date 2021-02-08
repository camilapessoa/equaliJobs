const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const {
  createCompany,
  loginCompany
} = require('../controllers/companyController')

router.route('/companies').post(createCompany)
router.route('/companies/login', auth).post(loginCompany)

module.exports = router