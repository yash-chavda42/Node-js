function withoutDoubles(die1, die2, noDoubles){
    if(noDoubles && die1 == die2) {
          die1++;
          if(die1 == 7)
              die1 = 1;
      }
                        
      return die1 + die2;
}

console.log(withoutDoubles(2, 3, true));
console.log(withoutDoubles(3, 3, true));
console.log(withoutDoubles(3, 3, false));