let x, y, z; //varible declaration
var p;
const s = 20;

let xyz = "xyz"; //we can not redeclare let but in var it is possible

x = 5;
y = 6;
z = x + y;

console.log("x:", x, "y:", y, "z:", z); //printing terminal

let a = 5;
let b = 5.0; //in javascript there is diffrence in datatype int,float because they are numbers

console.log("a==b", a == b);
console.log("a===b", a === b);

let w = 3;
let v = 2;
console.log("w+v:", w + v); //addition
console.log("w-v:", w + v); //subtraction
console.log("w*v:", w * v); //multiplication
console.log("w**v:", w ** v); //expo
console.log("w/v:", w / v); //division
console.log("w%v:", w % v); //mod
console.log("v++:", ++v); // increment
console.log("w--:", --w); // decrement

//javascript -> typescript ->to maintain the data
let arr = [0, 1, "2", 3, 4, 5, 6]; //javascript is weakly as type language so to avoid mixup of datatype typescript is came into picture

//console.log(sum(arr));

//object
let o = {
  id: "123",
  name: "yash",
  age: "21",
};

//string method
let str1 = "hello yash";
console.log(str1.length);

//slice(StartIndex, EndIndex)
console.log(str1.slice(6, 9)); //6,7,8
console.log(str1.slice(-8, -2)); //-8,-7,-6,-5,-4,-3

//substring(StartIndex, EndIndex)
console.log(str1.substring(6, 9)); //
console.log(str1.substring(-8, -2)); // subatring is not take nagative value but slice does. substring wwill start from 0

//substr(StartIndex, count)
console.log(str1.substring(0, 2)); //if can not provide count then it will print whole string

//function
let answer = mult(2, 3);
function mult(a, b) {
  if (a > 2) {
    console.log(a);
  } else if (a < 5) {
    console.log("a is less than 5");
  } else {
    console.log("else condition");
  }
}
a = 2;
switch (a) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log(a);
    break;
}

//console.log(answer)

let arr1 = ["2", 3, 1, 4, 5, 6];
console.log(arr1.sort());
console.log(arr1.length);
console.log(arr1.reverse());

const result = arr.filter((item) => {
  return item >= 4;
});

console.log(result); //arr.reduce() <- hw
