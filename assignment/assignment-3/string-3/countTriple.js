function countTriple(str){
    len = str.length;
    count = 0;
    for (i = 0; i < len-2; i++){
     tmp = str[i];
     if (tmp == str[i+1] && tmp == str[i+2])
       count++;
   }
   return count;
 
}

console.log(countTriple('abcXXXabc'));
console.log(countTriple('xxxabyyyycd'));
console.log(countTriple('a'));