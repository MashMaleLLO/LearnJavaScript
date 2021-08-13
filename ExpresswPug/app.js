const express = require('express')
const path = require('path')
const app = express()

//set path ไปหาที่เก็บ template
app.set('views', __dirname + "/views")
app.set('view engine', 'pug')
//get template
app.get('/', (req,res) => 
{
    res.render('index',
    {
        name : "Male",
        users: [{name: "Harry"},{name: "John"}]
    })
})

app.get('/about', (req,res)=>
{
    res.render('about')
})

app.listen(3000, ()=>
{

})