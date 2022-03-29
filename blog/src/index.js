const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Log
app.use(morgan('combined'))

// Templates handlebars
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('Home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  