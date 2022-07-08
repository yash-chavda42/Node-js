function sumDigits1(n){
    if(n == 0)
           return 0;
             
       if(n % 10 == 8) {
           if(parseInt(n / 10) % 10 == 8)
               return 2 + count8(n/10);
                               
           return 1 + count8(parseInt(n / 10));
       }
                                       
       return count8(parseInt(n / 10));
}

console.log(sumDigits1(126));
console.log(sumDigits1(49));
console.log(sumDigits1(12));