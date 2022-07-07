function doubleChar(str){
    newstr='';
    for(i=0;i<str.length;i++){
      newstr+=str[i].repeat(2);
    }
    return newstr;
}

console.log(doubleChar('The'));
console.log(doubleChar('AAbb'));
console.log(doubleChar('Hi-There'));