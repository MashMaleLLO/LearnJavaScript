//1 import express ด้วย require
const express = require('express')
//2 express() จะเป็น function และเราจะ assing  มันให้ตัวแปล app
const app = express();
//3 ตัว app ที่เรากำหนดให้เป็น express จะทำงานคล้าย object http จะมี getmethod


const contact = (req, res) =>
{
    res.send("This is contact page")
}

app.get('/user/:id', (req,res) => 
{
    //const id = req.params.id
    const { id } = req.params
    const query = req.query
    console.log(query)
    //เอาไปใช้ต่อแบบนี้
    //const statement = 'SELECT * FROM customers WHERE CustomerId = id'
    res.send(`<h1>Hello User ${id} and Welcome</h1>`)
})

app.get('/aboutUs', (req,res)=>
{
    res.send('This about us page')
})

app.get('/', function(req, res)
{
    res.send('Hello User')
})

app.get('/about', (req,res) => 
{
    res.send('About page')
})

app.get('/contact',contact)

//4 listen คล้ายๆ ของ http เป็นตัวบอกว่า server จะ run บน port อะไร
app.listen(3000)