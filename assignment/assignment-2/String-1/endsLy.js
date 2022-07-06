function endsLy(str){
    len=str.length
    if(str.slice(len-2,len)=='ly')
      return true;
    else
      return false
}

console.log(endsLy('oddly'));
console.log(endsLy('y'));
console.log(endsLy('oddl'));