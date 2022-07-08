function linearIn(outer, inner){
    i = 0;
    j = 0;
      
    while(i < inner.length && j < outer.length) {
        if(inner[i] > outer[j]) {
            j++;
        } else if(inner[i] < outer[j]) {
            return false;
        } else {
            i++;
        }
    }
                                              
    if(i != inner.length)
        return false;
                                                      
    return true;
}

console.log(linearIn([1, 2, 4, 6], [2, 4]));
console.log(linearIn([1, 2, 4, 6], [2, 3, 4]));
console.log(linearIn([1, 2, 4, 4, 6], [2, 4]));