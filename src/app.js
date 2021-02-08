const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoutes')

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

//const index = require('./routes/index')
//const company = require('./routes/companyRoute')
//const userAccount = require('./routes/accountRoute')

app.use('/api/v1', userRouter)


module.exports = app