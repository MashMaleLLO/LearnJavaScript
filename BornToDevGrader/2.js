//Input Example
var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {

    let n = inputList[0]
    let str = ""
    for(let i = 1; i <= parseInt(n); i++)
      {
        for(let j = 1; j <= i ; j++)
          {
            str += "*"
          }
        console.log(str)
        str = ""
		}

});

//Tips:  Run for check input format