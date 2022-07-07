function repeatEnd(str, n){
    new_str='';
    for(i=0;i<n;i++){
      new_str+=str.slice(str.length-n,str.length);
    }
    return new_str;
}

console.log(repeatEnd('Hello', 3));