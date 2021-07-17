var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {

  let n = inputList.pop()
  let str = ""
  for(let i = 0; i < n; i++)
    {
      for(let j = 0; j < n; j++)
        {
          if (i == 0 || i == n-1 || j == 0 || j == n-1)
            {
              str += "#"
            }
          else
            {
              str += " "
            }
        }
      console.log(str)
      str = ""
    }

});
