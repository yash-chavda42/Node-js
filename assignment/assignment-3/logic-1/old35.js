function old35(n){
    return (n % 3 == 0) != (n % 5 == 0);
}

console.log(old35(3));
console.log(old35(10));
console.log(old35(15));