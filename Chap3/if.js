const prompt = require('prompt-sync')()
let inp = prompt("Enter Your Input : ")
let maxi = parseInt(inp)
let inp2 = prompt("Enter Your Input : ")

if (parseInt(inp2) > maxi)
{
    maxi = parseInt(inp2)
}

let inp3 = prompt("Enter Your Input : ")

if (parseInt(inp3) > maxi)
{
    maxi = parseInt(inp3)
}

console.log(`Maximum number is ${maxi}`)