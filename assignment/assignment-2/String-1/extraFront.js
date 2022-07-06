function extraFront(str){
    len=str.length;
    if(len<=2){
      return str.repeat(3);
    }else{
      str1=str[0]+str[1];
      return str1.repeat(3);
    }
}

console.log(extraFront('Hello'));
console.log(extraFront('ab'));
console.log(extraFront('h'));