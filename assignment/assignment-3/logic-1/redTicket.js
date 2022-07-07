function redTicket(a, b, c){
    if(a == 2 && b == 2 && c == 2)
          return 10;
            
      if(a == b && b == c)
          return 5;
                      
      if(a != b && a != c)
          return 1;
                              
      return 0;
}

console.log(redTicket(2, 2, 2));
console.log(redTicket(2, 2, 1));
console.log(redTicket(0, 0, 0));