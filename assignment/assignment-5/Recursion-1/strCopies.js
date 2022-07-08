function strCopies(str, sub, n){
    if(n == 0)
          return true;
            
      if(str.length < sub.length)
          return false;
                    
      if(str.substring(0, sub.length)==sub)
          return strCopies(str.substring(1), sub, n-1);
                              
      return strCopies(str.substring(1), sub, n);
}

console.log(strCopies('catcowcat', 'cat', 2));
console.log(strCopies('catcowcat', 'cow', 2));
console.log(strCopies('catcowcat', 'cow', 1));