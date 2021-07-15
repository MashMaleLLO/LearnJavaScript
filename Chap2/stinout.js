const ps = require('prompt-sync')
let prompt = ps()

///// let prompt = require('prompt-sync')()

let inp = prompt("Enter your input: ")

if (inp < 50)
{
    console.log(inp)
}
