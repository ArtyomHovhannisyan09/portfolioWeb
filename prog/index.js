const express = require('express')
const exphbs =require('express-handlebars')
const AppRoutes =require('./routes/route')
const path = require('path')
const PORT =process.env.PORT || 3000

const app = express()

const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine' , 'hbs')
app.set('views' , 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.use(AppRoutes)
app.listen(PORT, ()=>{
    console.log("server conected")
})