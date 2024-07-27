console.log("Hello Node Js");

var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user);
console.log(user.username);

// os kya kya kar sakata hai
// console.log(os);


// file system
// 1.file path
// 2.data
// 3.callback function

// fs.appendFile('greeting.text', 'Hi' + user.username + '!\n', () => {
//     console.log("file is created");
// });