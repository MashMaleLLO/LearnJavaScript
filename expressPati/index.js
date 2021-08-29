const express = require('express')
const path = require('path')
const moment = require('moment')
const users = require('./Users')
const logger = require('./middleware/logger')
const userRouter = require('./routes/api/users')
const exhdb = require('express-handlebars')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exhdb({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => 
{
    res.render('index', 
    {
        title: "User app",
        users
    })
})

///body passer middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT =  process.env.PORT || 5000

//app.use(logger)

//set static 
//app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/users', userRouter)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))