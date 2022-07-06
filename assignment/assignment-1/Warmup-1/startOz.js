function startOz(str){
    if(str.slice(0,2)=='oz')
      return 'oz';
    else if(str.slice(0,2)=='zo')
      return '';
    else if(str.indexOf('o')>-1 && str.indexOf('z')==-1)
      return 'o';
    else if(str.indexOf('z')>-1 && str.indexOf('o')==-1)
      return 'z';
    else if(str.indexOf('z')>str.indexOf('o'))
      return 'o';
    else if(str.indexOf('z')<str.indexOf('o'))
      return 'z';
    else
      return '';
    
  
    
}

//test case
console.log(startOz('ozymandias'));
console.log(startOz('bzoo'));
console.log(startOz('oxx'));