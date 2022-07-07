function countYZ(str){
    len = str.length;
    count = 0;
    str = str.toLowerCase();
    for (i = 0; i < len; i++) {
      if ((str[i] == 'y' || str[i] == 'z') && (str[i+1]==" " ||str[i+1]==":" || str[i+1]=="-" || str[i+1]=="!" || str[i+1]=="2")) {
          count+=1;
      }
    }
    
    if(str[len-1]=='z' || str[len-1]=='y'){
      count+=1;
    }
    return count;
  
}

console.log(countYZ('fez day'));
console.log(countYZ('day fez'));
console.log(countYZ('day fyyyz'));