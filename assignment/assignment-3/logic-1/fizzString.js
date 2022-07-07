function fizzString(str){
    if(str.length > 0 && 
          str[0] == 'f' && str[str.length - 1] == 'b')
          return "FizzBuzz";
                
      if(str.length > 0 && str[0] == 'f')
          return "Fizz";
                          
      if(str.length > 0 && str[str.length - 1] == 'b')
          return "Buzz";
                                    
      return str;
}

console.log(fizzString('fig'));
console.log(fizzString('dib'));
console.log(fizzString('fib'));