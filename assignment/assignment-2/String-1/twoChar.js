function twoChar(str, index){
  
    if(str.length<=index+1 || index<0){
      return str[0]+str[1];
    }
    return str[index]+str[index+1];
}

console.log(twoChar('java', 0));
console.log(twoChar('java', 2));
console.log(twoChar('java', 3));