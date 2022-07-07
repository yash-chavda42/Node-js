function xyzThere(str){
    count=0;
    for(i=0;i<str.length-2;i++){
      if(str.slice(i,i+3)=='xyz' && str[i-1]!='.'){
        return true;
      }
    }
    return false;
}

console.log(xyzThere('abcxyz'));