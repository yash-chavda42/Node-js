function plusTwo(a, b){
    array=[];
    array[0]=a[0];
    array[1]=a[1];
    array[2]=b[0];
    array[3]=b[1];
    return array;
}

console.log(plusTwo([1, 2], [3, 4]));
console.log(plusTwo([4, 4], [2, 2]));
console.log(plusTwo([9, 2], [3, 4]));