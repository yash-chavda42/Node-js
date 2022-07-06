function conCat(a, b){
    len1=a.length
    len2=b.length
    if(a[len1-1]==b[0]){
      return a.slice(0,len1-1)+b;
    }
    else{
      return a+b;
    }
}

console.log(conCat('abc', 'cat'));
console.log(conCat('dog', 'cat'));
console.log(conCat('abc', ''));