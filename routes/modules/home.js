const express = require('express')
const router = express.Router()

router.get('/', (res, req) => {
  return res.render('/')
})

module.exports = router