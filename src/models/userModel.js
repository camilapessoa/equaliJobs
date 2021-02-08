const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  nome: {
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
  senha: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const userCollection = mongoose.model('user', userSchema);

module.exports = userCollection