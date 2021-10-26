const mongoose = require('mongoose')
const MONGODN_URI = ('mongodb://localhost/pocket-tracker')

mongoose.connect(MONGODN_URI)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db