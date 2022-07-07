function sortaSum(a, b){
    sum = a+b;
    if(sum >= 10 && sum <= 19)
      return 20;
    else
      return sum;
  
}

console.log(sortaSum(3, 4));
console.log(sortaSum(9, 4));
console.log(sortaSum(10, 11));