function stringBits(str){
    string='';
    for(i=0;i<str.length;i=i+2)
    {
      string=string+str[i];
    }
    return string;
}

//test case
console.log(stringBits('Hello'));
console.log(stringBits('Hi'));
console.log(stringBits('Heeololeo'));