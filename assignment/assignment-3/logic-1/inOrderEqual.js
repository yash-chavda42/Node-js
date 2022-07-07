function inOrderEqual(a, b, c, equalOk){
    if(equalOk)
          return a <= b && b <= c;
            
      return a < b && b < c;
}

console.log(inOrderEqual(2, 5, 11, false));
console.log(inOrderEqual(5, 7, 6, false));
console.log(inOrderEqual(5, 5, 7, true));