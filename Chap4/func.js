function contTOten()
{
    for(let i = 1; i<= 10 ;i++)
    {
        console.log(i)
    }
}

function sumToN(n)
{
    var sum = 0
    for (let i =1; i<= parseInt(n); i++)
    {
        sum += i
    }
    return sum

}

const sUm = 0

function sumToNrecur(n)
{
    if (n == 1)
    {
        return n
    }
    else
    {
        return n + sumToNrecur(n-1)
    } 
}

function summation(...num)
{
    var sum = 0
    for(var i = 0; i< num.length; i++)
    {
        sum += parseInt(num[i])
    }
    return sum
}

var print = function(x)
{
    console.log(x)
}

var printf = (n) =>
{
    console.log(n)
}

function printN(func,n)
{
    for(i =1; i<= parseInt(n); i++)
    {
        func(i)
    }
}

contTOten()
console.log(sumToN(10))
console.log(sumToNrecur(10))
console.log(summation(10,20,30))
print(555555)
printN(print,5)
printf(5)