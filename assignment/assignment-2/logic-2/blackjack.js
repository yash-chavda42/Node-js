function blackjack(a, b){
    if(a<=21 && b<=21 && a<=b){
      return b;
    }else if(a<=21 && b<=21 && a>=b){
      return a;
    }else if(a>21 && b>21){
      return 0;
    }else if(a>21){
      return b;
    }else if(b>21){
      return a;
    }
  
}

console.log(blackjack(19, 21));
console.log(blackjack(21,19));
console.log(blackjack(19, 22));
