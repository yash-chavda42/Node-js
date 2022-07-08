function countAbc(str){
    if(str.length<=2){
      return 0;
    }
    if(str.substring(0, 3)=="abc" || str.substring(0, 3)=="aba")
          return 1 + countAbc(str.substring(2));
    return countAbc(str.substring(1));
}

console.log(countAbc('abc'));
console.log(countAbc('abcxxabc'));
console.log(countAbc('abaxxaba'));