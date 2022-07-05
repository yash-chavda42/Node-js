function stringSplosion(str){
    string='';
    for(i=0;i<str.length;i++)
    {
      for(j=0;j<=i;j++){
          string=string+j;
      }
    }
    return string;
}

//test case
console.log(stringSplosion('Code'));
