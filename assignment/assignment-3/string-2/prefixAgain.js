function prefixAgain(str, n){
    t_str=str.slice(0,n);
    for(i=1;i<str.length-n+1;i++){
      if(str.slice(i,i+n)==t_str){
        return true;
      }
    }
    return false;
}

console.log(prefixAgain('abXYabc', 1));