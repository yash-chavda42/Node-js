function nearTen(num){
    return num % 10 <= 2 || num % 10 >= 8;
}

console.log(nearTen(12));
console.log(nearTen(17));
console.log(nearTen(19));