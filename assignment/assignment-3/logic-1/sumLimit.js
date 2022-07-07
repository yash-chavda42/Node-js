function sumLimit(a, b){
    sum = a + b;
    aLength = a.toString().length;
    sumLength = sum.toString().length;
        
    if(sumLength == aLength)
        return sum;
                  
    return a;
}

console.log(sumLimit(2, 3));
console.log(sumLimit(8, 3));
console.log(sumLimit(8, 1));