function repeatSeparator(word, sep, count){
    newstr = "";
    for (i = 0; i < count; i++) {
      if(i <= count){
        newstr += word;
      }
      if(i < count-1){
        newstr += sep;
      }
    }
    return newstr;
}

console.log(repeatSeparator('Word', 'X', 3));