function altPairs(str){
    let newstr='';
    if(str.length<=1){
    return str;
    }
    for(i=0;i<str.length;i=i+4){
      last=i+1;
      if(last>=str.length){
        newstr+=str[i];
      }else{
      newstr+=str[i]+str[i+1];
      }
    }
    return newstr;
}

//test case
console.log(altPairs('kitten'));
console.log(altPairs('Chocolate'));
console.log(altPairs('CodingHorror'));