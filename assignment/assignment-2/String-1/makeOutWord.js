function makeOutWord(out, word){
    return out.substring(0,2) + word + out.substring(2,4);
}

console.log(makeOutWord('<<>>', 'Yay'));
console.log(makeOutWord('<<>>', 'WooHoo'));
console.log(makeOutWord('[[]]', 'word'));
