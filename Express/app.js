//1 import express ด้วย require
const express = require('express')
//2 express() จะเป็น function และเราจะ assing  มันให้ตัวแปล app
const app = express();
//3 ตัว app ที่เรากำหนดให้เป็น express จะทำงานคล้าย object http จะมี getmethod
app.get('/', function(req, res)
{
    res.send('Hello User')
})
//4 listen คล้ายๆ ของ http เป็นตัวบอกว่า server จะ run บน port อะไร
app.listen(3000)