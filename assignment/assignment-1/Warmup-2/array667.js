function array667(num){
    count=0;
    for(i=0;i<num.length;i=i+1){
      if(num[i]==6){
        if(num[i+1]==6 || num[i+1]==7){
          count=count+1;
        }
      }
    }
    return count;
}

//test case
console.log(array667([6,6,2]));
console.log(array667([6,6,2,6]));
console.log(array667([6,7,2,6]));