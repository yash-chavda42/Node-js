function count7(n){
    if(n == 0)
          return 0;
            
      if(n % 10 == 7)
          return 1 + count7(parseInt(n / 10));
                      
      return count7(parseInt(n / 10));
}

console.log(count7(717));
console.log(count7(7));
console.log(count7(123));