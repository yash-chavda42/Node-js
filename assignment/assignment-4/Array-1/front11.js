function front11(a, b){
    lena=a.length
    lenb=b.length
    array=[];
    if(lena>=1 && lenb>=1){
      array[0]=a[0];
      array[1]=b[0];
      return array;
    }else if(lena==0 && lenb==0 ){
      return array;
    }else if(lena==0){
      array[0]=b[0];
      return array;
    }else if(lenb==0){
      array[0]=a[0];
      return array;
    }
       
}

console.log(front11([1, 2, 3], [7, 9, 8]));
console.log(front11([1], [2]));
console.log(front11([1, 7], []));
