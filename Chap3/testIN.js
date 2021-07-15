const prompt = require('prompt-sync')()
let r = prompt("Enter list : ")
let list = []
list.push(r)
console.log(list)

// let n = inputList.pop()
// let l = inputList.length
// let buffer = 0
//   if (n == "MaX")
//     {
//       strM = []
//       Max = -99999
//       while (inputList.length != 0)
//         {
//           for (let i = 0; i < l; i++)
//             {
//               if (inputList[i] > Max)
//                 {
//                   Max = inputList[i]
//                   buffer = i
//                 }
//               else
//                 {
//                   continue
//                 }
//             }
//           inputList.pop(buffer)
//           strM.push(Max)
//         }
//       console.log(strM)
//     }