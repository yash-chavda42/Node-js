function noTeenSum(a, b, c){
    return valcheck(b)+valcheck(a)+valcheck(c)
}
  
  function valcheck(val){
    if(13 <= val && val <= 19 && val != 15 && val != 16){
          return 0;
    }
    return val;
}


  
console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14)); 
 