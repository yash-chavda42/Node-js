function withoutEnd2(str){
    return str.slice(1,str.length-1);
}

console.log(withoutEnd2('Hello'));
console.log(withoutEnd2('abc'));
console.log(withoutEnd2('ab'));