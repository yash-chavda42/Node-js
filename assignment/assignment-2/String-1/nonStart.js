function nonStart(a, b){
    return a.substring(1,a.length)+b.substring(1,b.length)
}

console.log(nonStart('Hello', 'There'));
console.log(nonStart('java', 'code'));
console.log(nonStart('shotl', 'java'));

