function nTwice(str, n){
    return str.substring(0,n) + str.substring(str.length- n, str.length);
}

console.log(nTwice('hello', 2));
console.log(nTwice('Chocolate', 3));
console.log(nTwice('Chocolate', 1));
