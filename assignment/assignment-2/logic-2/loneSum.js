function loneSum(a, b, c){
    if(a==b && b==c){
        return 0;
    }
    else if(a==b){
      return c;
    }
    else if(c==b){
      return a;
    }
    else if(a==c){
      return b;
    }
    else{
      return a+b+c;
    }
}

console.log(loneSum(1, 2, 3));
console.log(loneSum(3, 2, 3));
console.log(loneSum(3, 3, 3));