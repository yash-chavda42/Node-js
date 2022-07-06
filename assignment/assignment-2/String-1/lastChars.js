function lastChars(a, b){
    len1=a.length;
    len2=b.length;
    if(len1>0 && len2>0){
      return a[0]+b[len2-1];
    }
    else if(len1>0 && len2==0){
      return a[0]+'@';
    }
    else if(len1==0 && len2>0){
      return '@'+b[len2-1];
    }else{
      return '@@';
    }
      
    
}

console.log(lastChars('last', 'chars'));
console.log(lastChars('yo', 'java'));
console.log(lastChars('hi', ''));