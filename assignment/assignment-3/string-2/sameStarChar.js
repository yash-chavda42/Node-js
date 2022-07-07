function sameStarChar(str){
    len = str.length;
    found = true;
    for (i = 0; i < len; i++) {
      tmpString = str.substring(i,i+1);
      if (tmpString=='*' && i > 0 && i < len-1) {
        if (str[i-1] == str[i+1])
          found = true;
        else
          found = false;
      }
    }
    return found;
  
}

console.log(sameStarChar('xy*yzz'));