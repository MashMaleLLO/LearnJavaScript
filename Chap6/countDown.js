function sayHi()
{
    console.log("Hi")
}

function sayName()
{
    console.log("Narawich")
}

// setTimeout(sayHi, 5000)
// setTimeout(sayName, 10000)
let t = 3
let n = 3
console.log("Time left : ")

let dot = () => {console.log(".")}

function wait()
{
    if (t > 0)
    {
        for(let i = 0; i<3; i++)
        {
            setTimeout(dot, 3000)
        }
        console.log(t)
        t--
    }
    else
    {
        console.log("Complete")
        process.exit(1)
    }
}

setInterval(wait, 6000)