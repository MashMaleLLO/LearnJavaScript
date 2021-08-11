const fs = require('fs')


/*
อีกแบบ
const getData = function(err, data)
{
    console.log(data)
}
fs.readfile('data.txt', 'utf-8', getData)

//
แบบที่อ่านตามลำดับ
fs.readfileSync{'data.txt', 'utf-8'}
*/

fs.readFile('data.txt', 'utf-8',(error,data) => 
{
    if (error)
    {
        console.log(error)
    }
    //แต้จะได้ data มาเป็น buffer เพราะ default เป็น buffer
    //เลยต้องมี utf-8
    console.log("Content => ",data)
})

///เขียน file
//เช่นเดียวกันมี sync ด้วย
fs.writeFile('output.txt', 'This write by nodeJS','utf-8', (error,data) => 
{
    if (error)
    {
        console.log(error)
    }
    console.log("data >>>", data)
})

