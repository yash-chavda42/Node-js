function withoutX2(str){
    len=str.length
    if(str[0]=='x' && str[1]=='x'){
      return str.slice(2,len);
    }else if(str[0]=='x'){
       return str.slice(1,len);
    }
    else if(str[1]=='x'){
       return str[0]+str.slice(2,len);
    }else{
      return str;
    }
}

console.log(withoutX2('xHi'));
console.log(withoutX2('Hxi'));
console.log(withoutX2('Hi'));