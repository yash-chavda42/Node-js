function fizzString2(n){
    if(n % 15 == 0)
         return "FizzBuzz!";
           
     if(n % 3 == 0)
         return "Fizz!";
                     
     if(n % 5 == 0)
         return "Buzz!";
                               
     return n + "!";
}

console.log(fizzString2(1));
console.log(fizzString2(2));
console.log(fizzString2(3));