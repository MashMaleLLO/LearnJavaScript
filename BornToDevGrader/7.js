var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {
	let m = inputList.pop()
    let n = inputList.pop()
    console.log(Math.pow(n,m))
});
