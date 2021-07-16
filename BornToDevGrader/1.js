var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {

  let n = inputList.pop()
  inputList.pop()
  let l = inputList.length
  let ls = []
  let str = ""
  for (i of inputList)
    {
      let j = parseInt(i)
      ls.push(j)
    }
  if (n == "MaX" || n == "max")
    {
      ls.sort(function(a,b){return b - a})
      for (j in ls)
        {
          str += ls[j] + " "
        }
      console.log(str)
    }
  else
    {
      ls.sort(function(a,b){return a - b})
      for (j in ls)
        {
          str += ls[j] + " "
        }
      console.log(str)
    }

});

