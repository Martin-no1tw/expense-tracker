const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  amount: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  categoryld: {
    type: String,
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    require: true
  }
})

module.exports = mongoose.model('record', recordSchema)
