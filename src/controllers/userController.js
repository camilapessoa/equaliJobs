const User = require('../models/userModel')
const AppError = require('../utils/appError')
const bcrypt = require('bcrypt')
require('dotenv').config({ path: __dirname + '/.env' })
const jwt = require('jsonwebtoken')

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.TOKEN_SECRET, { expiresIn: 86400 })
}

exports.createUser = async (req, res, next) => {
  if (!req.body) return next(new AppError('Dados invalidos', 403));

  const { nome, cpf, email, cid, senha } = req.body

  if (await User.findOne({ email })) return next(new AppError('Usuario já cadastrado', 403));

  const salt = await bcrypt.genSalt(12)
  const hashSenha = await bcrypt.hash(senha, salt)

  const user = await User.create({
    nome,
    cpf,
    email,
    cid,
    senha: hashSenha
  })

  res.status(201).json({
    status: 'Success',
    data: {
      id: user._id
    },
  });
}

exports.loginUser = async (req, res, next) => {
  const { email, senha } = req.body

  const user = await User.findOne({ email })

  if (!user) return next(new AppError('Usuario ou senha invalidos', 403));

  const senhaConfere = await bcrypt.compare(senha, user.senha)

  if (!senhaConfere) return next(new AppError('Usuario ou senha invalidos', 403));

  const token = generateToken({ id: user._id })

  res.header('auth-token', token)
  res.status(201).json({
    status: 'successo',
    message: 'Usuario logado!',
  });
}