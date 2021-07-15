const prompt = require('prompt-sync')()
var arr = []
var print = n => {console.log(n)}
for (let i = 0; i<10; i++)
{
    let n = prompt("Enter your No: ")
    arr.push(n)
}
for (i in arr)
{
    print(arr[i])
}
for (i of arr)
{
    print(i)
}