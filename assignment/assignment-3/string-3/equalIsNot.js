function equalIsNot(str){
    len = str.length;
    not = 0;
    is = 0;
    for (i = 0; i < len; i++) {
      if (i < len - 2) {
        tmp = str.substring(i,i+3);
        if (tmp=="not")
          not++;
      }
      if (i < len - 1) {
        tmp2 = str.substring(i,i+2);
        if (tmp2=="is")
          is++;
      }
    }
    if (not == is)
      return true;
    else
      return false;
  
}
console.log(equalIsNot('This is not'));
console.log(equalIsNot('This is notnot'));
console.log(equalIsNot('noisxxnotyynotxisi'));
