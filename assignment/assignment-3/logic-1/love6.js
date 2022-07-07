function love6(a, b){
    if (a == 6 || b == 6)
      return true;
    sum = a+b;
    diff = Math.abs(a-b);
    if (sum == 6 || diff == 6)
      return true;
    else
      return false;
  
}
console.log(love6(6, 4));
console.log(love6(4, 5));
console.log(love6(1, 5));