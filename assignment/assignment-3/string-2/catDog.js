function catDog(str){
    count1=0;
    count2=0;
    for(i=0;i<str.length-2;i++){
      if(str.slice(i,i+3)=='cat'){
        count1+=1
      }
    }
    for(i=0;i<str.length-2;i++){
      if(str.slice(i,i+3)=='dog'){
        count2+=1
      }
    }
    if(count1==count2){
      return true;
    }
    return false;
}
console.log(catDog('catdog'));
console.log(catDog('catcat'));
console.log(catDog('1cat1cadodog'));