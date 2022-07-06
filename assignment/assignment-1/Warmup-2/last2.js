function last2(str){
    count=0
    for(i=0;i<str.length-2;i++)
    {
      if(str.slice(str.length-2,str.length)==str.slice(i,i+2)){
      count=count+1   
      }
    }
    return count;
}

//test case
console.log(last2('hixxhi'));
console.log(last2('xaxxaxaxx'));
console.log(last2('axxaaxx'));