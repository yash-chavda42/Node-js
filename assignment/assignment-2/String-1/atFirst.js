function atFirst(str){
    len=str.length;
    if(len>=2){
      return str.slice(0,2);
    }else if(len==1){
      return str[0]+'@';
    }else{
      return '@'+'@';
    }
}

console.log(atFirst('hello'));
console.log(atFirst('hi'));
console.log(atFirst('h'));