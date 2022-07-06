function hasTeen(a, b, c){
    if((a>=13 && a<=19) || (b>=13 && b<=19) || (c>=13 && c<=19))
      return true;
    else
      return false
}

//test case
console.log(hasTeen(13, 20, 10));
console.log(hasTeen(20, 19, 10));
console.log(hasTeen(20, 10, 13));
