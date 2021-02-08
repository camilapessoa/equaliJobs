const mongoose = require('mongoose')
require('dotenv').config({ path: __dirname + '/.env' })
const app = require('./src/app')

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conectamos no MongoAtlas'));



app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Server is running on port ${process.env.PORT}`)
})