function makeBricks(small, big, goal){
    digit = goal % 10;
    if (goal > small + (big * 5))
     return false;
    if (digit < 5 && small < digit)
      return false;
    else if (digit > 5 && digit > small + 5)
      return false;
    else
      return true;
}

console.log(makeBricks(3, 1, 8));
console.log(makeBricks(3, 1, 9));
console.log(makeBricks(3, 2, 10));   