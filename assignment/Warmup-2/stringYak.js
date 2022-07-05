function stringYak(str){
    newstr='';
    for(i=0;i<str.length;i=i+1){
      if(str[i]=='y' && str[i+2]=='k'){
        i=i+2;
      }
      else{
        newstr=newstr+str[i];
      }
    }
    return newstr;
}

//test case
console.log(stringYak('yakpak'));
console.log(stringYak('pakyak'));
console.log(stringYak('yak123ya'));