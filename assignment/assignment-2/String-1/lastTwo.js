function lastTwo(str){
    len=str.length
    if(len>1){
      return str.slice(0,len-2)+str[len-1]+str[len-2]
    }
    else{
      return str;
    }
}

console.log(lastTwo('coding'));
console.log(lastTwo('cat'));
console.log(lastTwo('ab'));

