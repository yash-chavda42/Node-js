function doubleX(str){
    if(str.indexOf('x')==-1)
      return false
    else if(str.indexOf('x')==str.length-1)
      return false;
    else if(str[str.indexOf('x')]==str[str.indexOf('x')+1])
      return true;
    else 
      return false;
      
}

//test case
console.log(doubleX('axxbb'));
console.log(doubleX('axaxax'));
console.log(doubleX('xxxxx'));

