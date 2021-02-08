const companyModel = require('../models/companyModel')
require('dotenv').config({ path: __dirname + '/.env' })
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (params = {}) => {
  return jwt.sign(params, SECRET_USER, { expiresIn: 86400 })
}

exports.createCompany = async (req, res) => {

  try {

    const { email } = req.body

    if (await companyModel.findOne({ email })) return res.status(400).send({ message: 'Empresa já cadastrada.' })


    const newCompany = await companyModel.create(req.body)

    return res.status(201).send({
      company,
      token: generateToken({ id: newCompany._id })
    })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }

}

exports.loginCompany = async (req, res) => {
  const { email, password } = req.body

  const company = await companyModel.findOne({ email }).select('+password')

  if (!company) return next(new AppError('Companhia nao encontrada', 200))

  if (!await bcrypt.compare(password, company.password))
    return next(new AppError('Login ou senha inválidos', 401))

  return res.status(201).send({
    company,
    token: generateToken({ id: company._id })
  })
}
