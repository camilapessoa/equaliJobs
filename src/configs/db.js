const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config();

const mongoUri = process.env.MONGO_URI //mongodb://localhost:27017/

const connect = () => {
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

    .then(() => console.log('Conectamos no Mongo.'))
    .catch((err) => console.log(err))

}

module.exports = { connect }