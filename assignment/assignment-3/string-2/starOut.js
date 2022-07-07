function starOut(str){
    len = str.length;
    finalString = "";
    for (i = 0; i < len; i++) {
      if (i == 0 && str[i] != '*')
        finalString += str[i];
      if (i > 0 && str[i] != '*' && str[i-1] != '*')
        finalString += str[i];
      if (i > 0 && str[i] == '*' && str[i-1] != '*')
        finalString = finalString.substring(0,finalString.length-1);
    }
    return finalString;
    
}

console.log(starOut('ab*cd'));