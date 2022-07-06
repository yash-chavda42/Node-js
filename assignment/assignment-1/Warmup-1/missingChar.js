function missingChar(str, n){
    //return str[1];
    return str.replace(str[n], '');
}

//test case
console.log(missingChar('kitten', 1));
console.log(missingChar('kitten', 0));
console.log(missingChar('kitten', 4));