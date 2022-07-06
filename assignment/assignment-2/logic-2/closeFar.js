function closeFar(a, b, c){
    if(Math.abs(a-b)==1 && Math.abs(b-c)==1){
      return false;
    }else if(Math.abs(a-b)==1 && Math.abs(a-c)==1){
      return false;
    }
    else if(Math.abs(c-b)==1 && Math.abs(c-a)==1){
      return false;
    }
    else{
      return true;
    }
}

console.log(closeFar(1, 2, 10));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4,1,3));