const prompt = require('prompt-sync')()
let inp = prompt("Enter Your Input : ")
let m = "",k = "",n = ""
for (i = 1; i <= parseInt(inp); i++)
{
    for (y = 1; y <= parseInt(inp); y++)
    {
        if ( (y == 1) || (y == parseInt(inp)) || i == 1 || i == parseInt(inp) )
        {
            m += "*"
        }
        else
        {
            m += " "
        }
    }
    console.log(m)
    m = ""
}

for (i = 1; i<=parseInt(inp); i++)
{
    for (j = 1; j<=i; j++)
    {
        k += "*"
    }
    console.log(k)
    k = ""
}

for (i = 1; i<=parseInt(inp); i++)
{
    for (j = parseInt(inp); j>=i; j--)
    {
        n += "*"
    }
    console.log(n)
    n = ""
}