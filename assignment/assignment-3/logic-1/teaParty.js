function teaParty(tea, candy){
    if(tea < 5 || candy < 5)
          return 0;
            
      if(tea >= 2 * candy || candy >= 2 * tea)
          return 2;
                    
      return 1;
}

console.log(teaParty(6, 8));
console.log(teaParty(3, 8));
console.log(teaParty(20, 6));