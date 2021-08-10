const prompt = require("prompt-sync")()
const print = n => {console.log(n)}
const createCircle = r => {return Math.PI*Math.pow(r,2)}
function findAreaCircle(r)
{
    return 2*(Math.PI)*r
}
const Circle = 
{
    radius : null,
    colour : null,
    pi : Math.PI,
    getArea()
    {
        if(this.radius == null)
        {
            return "This is not a circle"
        }
        else
        {
            let rad = parseFloat(this.radius)
            return this.pi*(Math.pow(rad,2))
        }
    }
}

// let inp = prompt("Enter Input : ")
// let colour1 = prompt("Enter Colour : ")
// c = Circle
// c.radius = inp
// c.colour = colour1
// console.log(`This circle is ${c.colour} and it radius is ${c.radius} it area is ${c.getArea()}`)
// let inpLis = prompt("Enter Input : ").split(' ')
// for (i of inpLis)
// {
//     print(i)
// }

module.exports = print

