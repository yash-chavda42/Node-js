function comboString(a, b){
    if(a.length>b.length){
      return b+a+b;
    }else{
      return a+b+a;
    }
}

console.log(comboString('Hello', 'hi'));
console.log(comboString('Hi', 'Hello'));
console.log(comboString('aaa', 'b'));
