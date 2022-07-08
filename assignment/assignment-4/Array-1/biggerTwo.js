function biggerTwo(a, b){
    suma=0;
    sumb=0;
    for (let i = 0; i < a.length; i++) {
      suma += a[i];
    }
    for (let i = 0; i < b.length; i++) {
      sumb += b[i];
    }
    if(suma>=sumb){
      return a;
    }return b;
}

console.log(biggerTwo([1, 2], [3, 4]));
console.log(biggerTwo([3, 4], [1, 2]));
console.log(biggerTwo([1, 1], [1, 2]));