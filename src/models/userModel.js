const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  cid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
}, {
  timestamps: true
});

userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const userCollection = mongoose.model('user', userSchema);

module.exports = userCollection