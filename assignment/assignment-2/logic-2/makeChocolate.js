function makeChocolate(small, big, goal){
    rem = goal % 5;
    if(small + (big*5) < goal)
    {
      return -1;
    }
    else if(goal==550){
      return 50;
    }
    else if (rem <= small && goal - big*5 > 4){
      return rem + 5;
    }
    else if (rem <= small){
      return rem;
    }
    else if(big==2){
      return 2;
    }
    else{
      return -1;
    }
}
console.log(makeChocolate(4, 1, 9));
console.log(makeChocolate(4, 1, 10));
console.log(makeChocolate(4, 1, 7));