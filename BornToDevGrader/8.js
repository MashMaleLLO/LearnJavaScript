var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {
	let n = inputList.pop()
    var k = n - 1
	var str = "" 
	for (let i = 0; i<n ; i ++)
	{
    	for (let j = 0; j<k; j ++)
    	{
        	str += " "
    	}
    	k--
    	for (let l = 0; l < 2*i+1; l++)
    	{
        	str += "*"
    	}
    	console.log(str)
    	str = ""
	}
});