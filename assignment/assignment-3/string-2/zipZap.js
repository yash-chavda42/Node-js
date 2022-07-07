function zipZap(str){
    len = str.length;
    finalString = "";
    for (i = 0; i < len; i++) {
      finalString += str.substring(i,i+1);
      if (i > 0 && i < len-1) {
        if (str[i-1] == 'z' && str[i+1] == 'p')
          finalString = finalString.substring(0,finalString.length-1);
      }
    }
    return finalString;
  
}

console.log(zipZap('zipXzap'));