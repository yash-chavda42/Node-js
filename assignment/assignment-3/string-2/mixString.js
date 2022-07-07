function mixString(a, b){
    aLen = a.length;
    bLen = b.length;
    max = Math.max(aLen, bLen);
    word = "";
    for (i = 0; i < max; i++) {
      if (i <= aLen-1)
        word += a.substring(i,i+1);
      if (i <= bLen-1)
        word += b.substring(i,i+1);
    }
    return word;
  
}
console.log(mixString('abc', 'xyz'));
console.log(mixString('Hi', 'There'));
console.log(mixString('xxxx', 'xyz'));