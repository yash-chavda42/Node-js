function twoAsOne(a, b, c){
    return a + b == c || a + c == b || b + c == a;
}

console.log(twoAsOne(1, 2, 3));
console.log(twoAsOne(3, 1, 2));
console.log(twoAsOne(3, 2, 2));