function without2(str){
    len=str.length
    if(len==2){
      return '';
    }else if(len==0){
      return '';
    }else if(len==1){
      return str;
    }else if(str.slice(0,2)==str.slice(len-2,len)){
      return str.slice(2,len);
    }else{
      return str;
    }
    
}

console.log(without2('HelloHe'));
console.log(without2('HelloHi'));
console.log(without2('Hi'));

