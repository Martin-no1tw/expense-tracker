const express = require('express')
const session = require('express-session')
const app = express()
const exhbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const PORT = 3000

const routes = require('./routes')


require('./config/mongoose')


app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engin', 'hbs')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})