function extraEnd(str){
    string=str.substring(str.length-2,str.length)
    return string.repeat(3);
}

console.log(extraEnd('Hello'));
console.log(extraEnd('ab'));
console.log(extraEnd('hi'));