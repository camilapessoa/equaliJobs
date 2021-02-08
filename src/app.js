const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoutes')
//const companyRouter = require('./routes/companyRoutes')


app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', userRouter)
//app.use('/api/v1', companyRouter)

module.exports = app