function middleThree(str){
    val=parseInt(str.length/2)
    return str[val-1]+str[val]+str[val+1];
}

console.log(middleThree('Candy'));
console.log(middleThree('and'));
console.log(middleThree('solving'));