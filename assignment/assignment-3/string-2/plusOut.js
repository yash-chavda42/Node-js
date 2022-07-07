function plusOut(str, word){
    slen = str.length;
    wlen = word.length;
    fin = "";
    for (i = 0; i < slen; i++) {
      if (i <= slen - wlen) {
        tmp = str.substring(i,i+wlen);
        if (tmp==word) {
          fin += word;
          i += wlen-1;
        }
        else
          fin += "+";
      }
      else
        fin += "+";
    }
    return fin;
}

console.log(plusOut('12xy34', 'xy'));
console.log(plusOut('12xy34', '1'));
console.log(plusOut('12xy34xyabcxy', 'xy'));