const companyCollections = require('../model/companySchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_COMPANY = process.env.SECRET_COMPANY


const generateToken = (params = {}) => {
  return jwt.sign(params, SECRET_COMPANY, { expiresIn: 86400 })
}

const createCompany = async (request, response) => {

  try {

    const { email } = request.body

    if (await companyCollections.findOne({ email }))
      return response.status(400).send({ message: 'Empresa já cadastrada.' })


    const user = await companyCollections.create(request.body)


    return response.status(201).send({
      user,
      token: generateToken({ id: user.id })
    })

  } catch (error) {
    response.status(500).send({ message: error.message })
  }

}

const loginCompany = async (request, response) => {
  const { email, password } = request.body

  const user = await companyCollections.findOne({ email }).select('+password')

  if (!user)
    return response.status(400).send({ message: 'Empresa não encontrada.' })

  if (!await bcrypt.compare(password, user.password))
    return response.status(400).send({ message: 'Senha inválida.' })

  user.password = undefined

  return response.status(201).send({
    user,
    token: generateToken({ id: user.id })
  })

}




module.exports = {
  createCompany,
  loginCompany
}