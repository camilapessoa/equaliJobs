const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoutes')
const companyRouter = require('./routes/companyRoutes')
const mainRouter = require('./routes/mainRoute')


app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', userRouter)
app.use('/api/v1', companyRouter)
app.use('/api/v1', mainRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Não foi possível encontrar ${req.originalUrl} neste servidor.`, 404));
});

module.exports = app