function countHi(str){
    count=0;
    for(i=0;i<str.length-1;i++){
      if(str.slice(i,i+2)=='hi'){
        count+=1
      }
    }
    return count;
}

console.log(countHi('abc hi ho'));
console.log(countHi('ABChi hi'));
console.log(countHi('hihi'));
