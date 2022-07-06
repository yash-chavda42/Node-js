function startHi(str){
    if(str.slice(0,2)=='hi')
      return true;
    else
      return false
}

//test case
console.log(startHi('hi there'));
console.log(startHi('hi'));
console.log(startHi('hello hi'));

