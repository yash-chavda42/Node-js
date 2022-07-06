function mixStart(str){
    if(str.slice(1,3)=='ix')
      return true;
    else
      return false;
}

//test case
console.log(mixStart('mix snacks'));
console.log(mixStart('pix snacks'));
console.log(mixStart('piz snacks'));