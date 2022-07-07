function bobThere(str){
    count=0;
    for(i=0;i<str.length-2;i++){
      if(str[i]=='b' && str[i+2]=='b'){
        return true;
      }
    }
    return false;
}

console.log(bobThere('abcbob'));
console.log(bobThere('b9b'));
console.log(bobThere('bac'));