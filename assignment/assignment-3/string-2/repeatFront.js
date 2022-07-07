function repeatFront(str, n){
    new_str='';
    for(i=n;i>0;i--){
      new_str+=str.slice(0,i);
    }
    return new_str;
}

console.log(repeatFront('Chocolate', 4));