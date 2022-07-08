function countPairs(str){
    if(str.length<= 2)
          return 0;
    if(str[0] == str[2])
          return 1 + countPairs(str.substring(1));
                      
      return countPairs(str.substring(1));
}

console.log(countPairs('axa'));
console.log(countPairs('axax'));
console.log(countPairs('axbx'));