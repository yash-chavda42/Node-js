function greenTicket(a, b, c){
    if(a == b && b == c)
          return 20;
            
      if(a == b || a == c || b == c)
          return 10;
                    
      return 0;
}

console.log(greenTicket(1, 2, 3));
console.log(greenTicket(2, 2, 2));
console.log(greenTicket(1, 2, 2));