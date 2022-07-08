function commonEnd(a, b){
    lena=a.length;
    lenb=b.length;
    if(a[0]==b[0] || a[lena-1]==b[lenb-1]){
      return true;
    }
    return false;
}

console.log(commonEnd([1, 2, 3], [7, 3]));
console.log(commonEnd([1, 2, 3], [7, 3, 2]));
console.log(commonEnd([1, 2, 3], [1, 3]));