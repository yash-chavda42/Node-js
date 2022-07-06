function countXX(str){
    count=0
    for(i=0;i<str.length-1;i++)
      if((str.slice(i,i+2))=='xx')
        count+=1
    return count;
      
}

//test case
console.log(countXX('abcxx'));
console.log(countXX('xxx'));
console.log(countXX('xxxx'));