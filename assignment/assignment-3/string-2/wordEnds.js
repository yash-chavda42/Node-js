function wordEnds(str, word){
    slen = str.length;
    wlen = word.length;
    fin = "";
    for (i = 0; i < slen-wlen+1; i++) {
      tmp = str.substring(i,i+wlen);
      if (i > 0 && tmp==word)
        fin += str.substring(i-1,i);
      if (i < slen-wlen && tmp==word)
        fin += str.substring(i+wlen,i+wlen+1);
    }
    return fin;
  
}

console.log(wordEnds('abcXY123XYijk', 'XY'));