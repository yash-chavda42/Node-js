function everyNth(str, n){
    string1=''
    for(i=0;i<str.length;i=i+n)
      string1=string1+str[i];
    return string1
}

console.log(everyNth('Miracle', 2));
console.log(everyNth('abcdefg', 2));
console.log(everyNth('abcdefg', 3));