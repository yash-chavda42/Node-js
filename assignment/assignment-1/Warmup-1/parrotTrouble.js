function parrotTrouble(talking, hour){
    if(talking==true && (hour<7 || hour>20))
      return true;
    else 
      return false
}

//test case
console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));