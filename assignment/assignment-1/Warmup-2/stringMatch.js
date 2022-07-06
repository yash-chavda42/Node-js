function stringMatch(a, b){
    let size = Math.min(a.length, b.length);
    count=0
    for(i=0;i<size-1;i=i+1){
     sub1=a.substring(i,i+2);
     sub2=b.substring(i,i+2);
     if(sub1==sub2){
       count+=1;
     }
    }
    return count;
}

//test case
console.log(stringMatch('xxcaazz', 'xxbaaz'));
console.log(stringMatch('abc', 'abc'));
console.log(stringMatch('abc', 'axc'));