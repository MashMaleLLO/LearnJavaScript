const prompt = require('prompt-sync')()
const print = n => {console.log(n)}
let Circle = 
{
    radius : 0,
    pi : 3.14,
    getArea()
    {
        return this.pi * this.radius * this.radius
    }
}
let Triangle =
{
    width : 0,
    height : 0,
    getArea()
    {
        return this.width * this.height
    }
}

var inp = prompt("Enter H and W :")
var lis = []
for(let i of inp.split(','))
{
    lis.push(i)
}
var h = lis[0]
var w = lis[1]
Triangle.height = h
Triangle.width = w
for (let i in Triangle)
{
    print(Triangle[i])
}
for (let i of Object.keys(Triangle))
{
    print(i)
}
print(Triangle.getArea())
print("Kuy")