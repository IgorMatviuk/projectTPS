const {model, Schema} = require('mongoose')

const adminSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = model('admins', adminSchema)