const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const PORT = 3000

const routes = require('./routes')


require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engin', 'hbs')

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})