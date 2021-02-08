const Company = require('../models/companyModel')
require('dotenv').config({ path: __dirname + '/.env' })
const AppError = require('../utils/appError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.TOKEN_SECRET, { expiresIn: 86400 })
}

exports.createCompany = async (req, res, next) => {
  if (!req.body) return next(new AppError('Dados invalidos', 403));

  const { nome, cnpj, email, endereco, contato, senha } = req.body

  if (await Company.findOne({ email })) return next(new AppError('Empresa já cadastrada', 403));

  const salt = await bcrypt.genSalt(12)
  const hashSenha = await bcrypt.hash(senha, salt)

  const company = await Company.create({
    nome,
    cnpj,
    email,
    endereco,
    contato,
    senha: hashSenha
  })

  res.status(201).send({
    status: 'Success',
    data: {
      id: company._id,
    },
  })
}

exports.loginCompany = async (req, res, next) => {
  const { email, senha } = req.body

  const company = await Company.findOne({ email })

  if (!company) return next(new AppError('Usuario ou senha invalidos', 403));

  const senhaConfere = await bcrypt.compare(senha, company.senha)

  if (!senhaConfere) return next(new AppError('Usuario ou senha invalidos', 403));

  const token = generateToken({ id: company._id })

  res.header('auth-token', token)
  res.status(201).json({
    status: 'successo',
    message: 'Usuario logado!',
  });
}
