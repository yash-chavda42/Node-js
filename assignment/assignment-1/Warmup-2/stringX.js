function stringX(str){
    newstr='';
    for(i=1;i<str.length-1;i++)
    {
      if(str[i]!='x'){
        newstr=newstr+str[i];
      }
    }
    if(str.length==0){
       return '';
    }
    else{
       return str[0]+newstr+str[str.length-1];
    }
}

//test case
console.log(stringX('xxHxix'));
console.log(stringX('abxxxcd'));
console.log(stringX('xabxxxcdx'));
