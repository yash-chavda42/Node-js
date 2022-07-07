function specialEleven(n){
    return (n % 11) == 0 || (n % 11) == 1;
}

console.log(specialEleven(22));
console.log(specialEleven(23));
console.log(specialEleven(24));