const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const companySchema = new Schema({

  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
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

  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true, collection: 'companies'
});

companySchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const companyModel = mongoose.model('company', companySchema);

module.exports = companyModel