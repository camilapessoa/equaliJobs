const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const database = require('../equaliJobs/src/configs/db')
database.connect()

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

const index = require('../routes/index')
const company = require('../equaliJobs/src/routes/companyRoute')
const userAccount = require('../equaliJobs/src/routes/accountRoute')

app.use('/', index)
app.use('/account', userAccount)
app.use('/company', company)



module.exports = app