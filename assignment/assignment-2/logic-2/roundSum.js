function roundSum(a, b, c){
    return r10(a)+r10(b)+r10(c)
  }
  
  function r10(n){
    if (n % 10 < 5)
      return n - (n%10);
    else
      return n + (10 - (n%10));
}

console.log(roundSum(16, 17, 18));
console.log(roundSum(12, 13, 14));  
console.log(roundSum(6, 4, 4));