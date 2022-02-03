const {model, Schema} = require('mongoose')

const machineSchema = new Schema({
  title: {
    type: String,
    required: true
  },
})

module.exports = model('machines', machineSchema)