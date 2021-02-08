const jwt = require('jsonwebtoken')
require('dotenv').config({ path: __dirname + '/.env' })

const auth = (req, res, next) => {

  const authHeader = req.get('authorization')

  if (!authHeader)
    return res.status(401).send({ message: 'Token não localizado.' })

  const token = authHeader.split(' ')[1]

  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error)
      return res.status(401).send({ message: 'Token inválido.' })

    req.userId = decoded.id
    return next()
  })

}

module.exports = { auth }