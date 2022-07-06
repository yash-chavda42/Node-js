function monkeyTrouble(aSmile, bSmile){
    if(aSmile==bSmile){
      return true;
    }else{
      return false;
    }
}

//test case
console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));