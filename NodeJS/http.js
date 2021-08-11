const http = require('http')
const path = require('path')
const fs = require('fs')
//กำหนดชื่อ host และ port เป็น local host
const hostname = '127.0.0.1'
const port = 3000
//สร้าง server โดย callback โดยมี arg เป็น request respond

const handler = (req, res) => 
{
    //บรรทัด 12 คือการสร้าง path ไปหา file โดยใช้ path.join __dirname ซึ่งจะได้ directory join กับ ชื่อ
    //file โดยไม่ต้องนั่งเขียน path เอง แล้วให้บรรทัด 13 ไปอ่าน data ใน file นั้นได้เลย
    const filename = path.join(__dirname, "testNode.html")
    const indexData = fs.readFileSync(filename)
    //ถ้า set header เป็น text plain จะไม่มอง code ด้านล่างเป็น html tag 
    // res.setHeader('Content-Type', 'text/plain')
    res.end(indexData)
}

// const server = http.createServer((req, res) => 
// {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'tex/plain')
//     res.end("Hello User")
// })

const server = http.createServer(handler)

server.listen(port, hostname, () => 
{
    console.log(`Server running at http://${hostname}:${port}/`)
})