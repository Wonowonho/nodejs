//Blocking Code

/* 
 var fs = require("fs");

 var data = fs.readFileSync('input.txt');

 console.log(data.toString());
 console.log("Program has ended");
 */
// -> 텍스트를 출력하고나서 프로그램이 종료되었다는 문구를 출력합니다.



//Non Blocking Code
var fs = require("fs");

var data = fs.readFile('input.txt',function(err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
})

console.log("Program has ended");

// -> callback 함수를 사용하여 이렇게 프로그램의 흐름을 끊지 않음으로서,
//Non-Blocking 코드를 사용하는 서버는 Blocking 코드를 사용하는 서버보다
//더 많은 양의 요청을 빠르게 처리 할 수 있게됩니다.