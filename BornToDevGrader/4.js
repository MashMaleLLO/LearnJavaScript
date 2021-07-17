var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {

    let ls = []
    var str = ""
    var reStr = ""
    for(i of inputList)
      {
        str += i
      }
  	for(j of str.split(" "))
      {
        ls.push(j)
      }
  	ls.reverse()
  	for(k of ls)
      {
        reStr += k + " "
      }
  	console.log(reStr)

});
