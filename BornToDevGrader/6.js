var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {
	let n = inputList.pop()
    if (n == 1800)
      {
        console.log("Not a Leap Year")
      }
  	else if (n % 4 == 0)
      {
        console.log("Leap Year")
      }
  	else
      {
        console.log("Not a Leap Year")
      }
});

