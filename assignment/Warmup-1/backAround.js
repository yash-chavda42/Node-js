function backAround(str){
    l=str.length-1;
    return str[l]+str+str[l];
}

//test case
console.log(backAround('cat'));
console.log(backAround('Hello'));
console.log(backAround('a'));
