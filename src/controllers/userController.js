const User = require('../models/userModel')
const AppError = require('../utils/appError')
require('dotenv').config({ path: __dirname + '/.env' })
//const jwt = require('jsonwebtoken')

//const generateToken = (params = {}) => {
//return jwt.sign(params, SECRET_USER, { expiresIn: 86400 })}

exports.createUser = async (req, res, next) => {
  if (await User.findOne({ email })) return next(new AppError('Usuario já cadastrado', 403));

  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      newUser,
      token: generateToken({ id: newUser._id })
    },
  });
}

exports.loginUser = async (req, res, next) => {
  const { email } = req.body

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new AppError('Usuario nao encontrado', 200));
  }

  if (!await bcrypt.compare(password, user.password))
    return res.status(400).send({ message: 'Login ou senha invalidos' })

  res.status(201).json({
    status: 'success',
    data: {
      user,
      token: generateToken({ id: company._id })
    },
  });
}