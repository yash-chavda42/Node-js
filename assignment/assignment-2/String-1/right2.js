function right2(str){
    return str.substring(str.length-2,str.lenght)+str.substring(0,str.length-2)
}

console.log(right2('Hello'));
console.log(right2('java'));
console.log(right2('Hi'));