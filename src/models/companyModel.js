const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const companySchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  endereco: {
    type: String,
    unique: true,
    required: true,
  },
  contato: {
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

const companyModel = mongoose.model('companies', companySchema);

module.exports = companyModel