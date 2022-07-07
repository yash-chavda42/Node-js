function lessBy10(a, b, c){
    return  Math.abs(a - b) >= 10 || Math.abs(a - c) >= 10 || 
        Math.abs(b - c) >= 10;
}
console.log(lessBy10(1, 7, 11));
console.log(lessBy10(1, 7, 10));
console.log(lessBy10(11, 1, 7));