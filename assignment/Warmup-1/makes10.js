function makes10(a, b){
    sum=a+b
    if(a==10 || b==10 || sum==10)
      return true;
    else
      return false
}

//test case
console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));