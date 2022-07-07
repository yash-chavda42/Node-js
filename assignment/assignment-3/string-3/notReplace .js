function notReplace(str){
    result = "";
    len = str.length;
    for(i = 0; i < len; i++){
      if(i-1 >= 0 && str[i-1].toLowerCase() === str[i-1].toUpperCase()
      || i+2 < len && str[i+1].toLowerCase() === str[i+1].toUpperCase()) {
        result += str[i];
      }
      else if(i+1 < len && str.substring(i, i+2)=="is") {
        result += "is not";
        i++;
      }
      else result += str[i];
    }
    return result;
  
}

console.log(notReplace('is test'));
console.log(notReplace('is-is'));
console.log(notReplace('This is right'));