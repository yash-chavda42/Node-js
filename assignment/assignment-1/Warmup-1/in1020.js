function in1020(a, b){
    if((a>=10 && a<=20) || (b>=10 && b<=20))
      return true;
    else
      return false
}

//test case
console.log(in1020(12, 99));
console.log(in1020(21, 12));
console.log(in1020(8, 99));