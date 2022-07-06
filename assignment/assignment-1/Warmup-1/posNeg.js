function posNeg(a, b, negative){
    if(a<0 && b<0 && negative==true)
      return true;
    else if(a<0 && b<0 && negative==false)
      return false;
    else if((a<0 || b<0) && negative==false)
      return true;
    else
      return false;
}

//test case
console.log(posNeg(1, -1, false));
console.log(posNeg(-1, 1, false));
console.log(posNeg(-4, -5, true));