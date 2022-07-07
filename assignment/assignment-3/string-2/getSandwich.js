function getSandwich(str){
    len = str.length;
    tmpString = "";
    finalString = "";
    start = 0;
    finish = 0;
    found = false;
    if (len <= 10)
      return "";
    for (i = 0; i < len - 4; i++) {
      tmpString = str.substring(i, i+5);
      if (tmpString=='bread' && found == true){
        finish = i; 
      }
      if (tmpString=='bread' && found == false) {
        start = i+5;
        found = true;
      }
    }
    finalString = str.substring(start,finish);
    return finalString;
   
}

console.log(getSandwich('breadjambread'));
console.log(getSandwich('xxbreadjambreadyy'));
console.log(getSandwich('xxbreadyy'));


