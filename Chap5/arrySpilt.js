const prompt = require('prompt-sync')()
var inp = prompt("Enter your Input: ")
var lis = []
const print = n => {console.log(n)}
for (i of inp.split(','))
{
    lis.push(parseInt(i))
}
print(lis)
