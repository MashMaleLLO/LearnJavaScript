const prompt = require('prompt-sync')()

let Circle =
{
    radius : 0,
    getArea()
    {
        return Math.PI * this.radius * this.radius
    }
}

function castToabs(n)
{
    return Math.abs(n)
}

var inp = prompt("Enter Your Radius : ")
Circle.radius = parseInt(inp)
console.log(`Your radius is ${inp} so the circle area is ${Circle.getArea()}`)
var inp2 = prompt("Enter Your negative num : ")
inp2 = parseInt(inp2)
console.log(`Your negative number is ${inp2} so your abs of that no is ${castToabs(inp2)}`)
