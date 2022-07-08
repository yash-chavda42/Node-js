function count11(str){
    if(str.length<=1){
      return 0;
    }
    if(str[0]==1 && str[1]==1){
      return 1+count11(str.substring(2));
    }return count11(str.substring(1));
}

console.log(count11('11abc11'));
console.log(count11('abc11x11x11'));
console.log(count11('111'));