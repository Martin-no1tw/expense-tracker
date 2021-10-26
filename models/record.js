const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  id: {
    tyoe: Number,
  },
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  categoryld: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    require: true
  }
})

module.exports = mongoose.model('Record', recordSchema)