function less20(n){
    return n % 20 == 19 || n % 20 == 18;
}

console.log(less20(18));
console.log(less20(19));
console.log(less20(20));