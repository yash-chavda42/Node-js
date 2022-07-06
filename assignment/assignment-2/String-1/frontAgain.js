function frontAgain(str){
    if(str.length<=1){
      return false;
    }
    else if(str.slice(0,2)==str.slice(str.length-2,str.length)){
      return true;
    }
    else{
      return false;
    }
}

console.log(frontAgain('edited'));
console.log(frontAgain('edit'));
console.log(frontAgain('ed'));