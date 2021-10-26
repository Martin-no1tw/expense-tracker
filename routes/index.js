const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const { authenticator } = require('../middleware/auth')
const auth = require('./modules/auth')

router.use('/', auth, home)


module.exports = router