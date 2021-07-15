const prompt = require('prompt-sync')()
var inp = prompt("Enter Your Input: ")
var lis = []
const print = n => {console.log(n)}
for(i = 0; i<inp.length; i++)
{
    if(inp[i] == ',' || inp[i] == ' ')
    {
        continue
    }
    else
    {
        let str = ""
        let j = i
        while(inp[i] != "," && inp[i] != " " && i < inp.length)
        {
            str += inp[i]
            i += 1
        }
        lis.push(parseInt(str))
    }
}
function sumMation(arr)
{
    var sum = 0
    for(i of arr)
    {
        sum += parseInt(i)
    }
    return sum
}
print(sumMation(lis))