function blueTicket(a, b, c){
    ab = a + b;
    bc = b + c;
    ac = a + c;
        
    if(ab == 10 || bc == 10 || ac == 10)
        return 10;
                  
    if(ab == bc + 10 || ab == ac + 10)
        return 5;
                            
    return 0;
}

console.log(blueTicket(9, 1, 0));
console.log(blueTicket(9, 2, 0));
console.log(blueTicket(6, 1, 4));