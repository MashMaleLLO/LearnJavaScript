const prompt = require('prompt-sync')()
var inp = prompt("Enter Your Password : ")
let pattern = /(\d{1,4})$/
let pattern2 = /^(\d{1,3})/
let pattern3 = /,/
// if (pattern2.test(inp))
// {
//     console.log("OK")
// }
// else
// {
//     console.log("Not OK")
// }
let newPass = inp.split(pattern3)
console.log(newPass)
