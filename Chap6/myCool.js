const prompt = require('prompt-sync')()
const inp = prompt("Enter Your Count : ")
console.log("Hi")
let t = parseInt(inp)
let n = 3
const dot = () => 
{ 
    if (n > 0)
    {
        console.log(".")
    }
    else
    {
        clearInterval(dot)
    }
}
const countDown = () =>
{
    if (t > 0)
    {
        setInterval(dot, 3000)
        console.log(t)
        t--
    }
    else
    {
        clearInterval(countDown)
        console.log("Complete")
    } 
}

setInterval(countDown, 9000)