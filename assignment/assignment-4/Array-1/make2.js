function make2(a, b){
    lena=a.length;
    array=[];
    if(lena>=2){
      array[0]=a[0];
      array[1]=a[1];
      return array;
    }else if(lena==1){
      array[0]=a[0];
      array[1]=b[0];
      return array;
    }else if(lena==0){
      array[0]=b[0];
      array[1]=b[1];
      return array;
    }
}

console.log(make2([4, 5], [1, 2, 3]));
console.log(make2([4], [1, 2, 3]));
console.log(make2([], [1, 2]));
