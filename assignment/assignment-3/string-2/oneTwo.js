function oneTwo(str){
    result = "";
    for(i=0; i <str.length-2; i += 3)
    {
        result = result + str.substring(i+1,i+3) + str[i];
    }
    return result;
}

console.log(oneTwo('abc'));
console.log(oneTwo('tca'));
console.log(oneTwo('tcagdo'));