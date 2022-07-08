function start1(a, b){
    lena=a.length;
    lenb=b.length;
    if(lena==0 && lenb==0){
      return 0;
    }else if(lena==0 && b[0]==1){
      return 1;
    }else if(lenb==0 && a[0]==1){
      return 1;
    }else if(b[0]==1 && a[0]==1){
      return 2;
    }else if(a[0]==1){
      return 1;
    }else if(b[0]==1){
      return 1;
    }else{
      return 0;
    }
}

console.log(start1([1, 2, 3], [1, 3]));
console.log(start1([7, 2, 3], [1]));
console.log(start1([1, 2], []));