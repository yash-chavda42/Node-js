function squareUp(n){
    arr = [n*n];    
    if(n == 0)
        return arr;
              
    for(i = n - 1; i < arr.length; i += n) {
        for(ij = i; j >= i - i / n; j--)
            arr[j] = i - j + 1;
    }
                              
    return arr;
}

console.log(squareUp(3));
console.log(squareUp(2));
console.log(squareUp(4));