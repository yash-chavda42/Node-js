function inOrder(a, b, c, bOk){
    if(bOk)
        return c > b;
        
    return b > a && c > b;
}
console.log(inOrder(1, 2, 4, false));
console.log(inOrder(1, 2, 1, false));
console.log(inOrder(1, 1, 2, true));