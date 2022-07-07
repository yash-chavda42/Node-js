function teenSum(a, b){
    if((13 <= a && a <= 19) || (13 <= b && b <= 19))
          return 19;
            
      return a + b;
}

console.log(teenSum(3, 4));
console.log(teenSum(10, 13));
console.log(teenSum(13, 2));