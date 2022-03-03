const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRouts = require('./routes/home')
const cardRouts = require('./routes/cart')
const addRouts = require('./routes/add')
const coursesRouts = require('./routes/courses')

const bodyParser = require('body-parser')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRouts)
app.use('/add', addRouts)
app.use('/courses', coursesRouts)
app.use('/card', cardRouts)

const PORT = process.env.PORT || 3000

async function start() {
    try {
        const url = 'mongodb+srv://blog:LPB0NLMFAyYQJI0Z@cluster0.vcifg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        await mongoose.connect(url, {useNewUrlParser: true});
    
        app.listen(PORT, () => {
            console.log(`work it ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }

}
start()

// mongoDB {
//  blog - LPB0NLMFAyYQJI0Z

// igortot - 5LpRquwtTDHgMkRZ
// }


