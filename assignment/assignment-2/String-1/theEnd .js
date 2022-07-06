function theEnd(str, front){
    if(front==true){
      return str[0];
    }
    else{
      return str[str.length-1];
    }
}

console.log(theEnd('Hello', true));
console.log(theEnd('Hello', false));
console.log(theEnd('oh', true));