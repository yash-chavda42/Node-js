function close10(a, b){
    if((Math.abs(a-10)==Math.abs(b-10)))
      return 0;
    else if(Math.abs(a-10)<Math.abs(b-10))
      return a;
    else if(Math.abs(a-10)>Math.abs(b-10))
      return b;
  }

//testcase
console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));