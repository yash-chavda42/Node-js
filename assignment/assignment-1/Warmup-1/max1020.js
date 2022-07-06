function max1020(a, b){
    if((Math.max(a,b)>=10 && Math.max(a,b)<=20))
      return Math.max(a,b);
    else if((Math.min(a,b)>=10 && Math.min(a,b)<=20))
      return Math.min(a,b);
    else
      return 0;
}

//test case
console.log(max1020(11, 19));
console.log(max1020(19, 11));
console.log(max1020(11, 9));