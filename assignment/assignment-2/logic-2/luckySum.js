function luckySum(a, b, c){
    sum=0
    if(a==13){
      return 0;
    }else if(b==13){
      return a;
    }else if(c==13){
      return a+b;
    }else{
      return a+b+c;
    }
}

console.log(luckySum(1, 2, 3));
console.log(luckySum(1, 2, 13));
console.log(luckySum(1, 13, 3));