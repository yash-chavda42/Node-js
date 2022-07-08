function countHi2(str){
    if(str.length<=1)
    {
      return 0;
    }
          
     if(str.length > 2 && str.substring(0, 3)=="xhi")
      return countHi2(str.substring(3));
    if(str[0]=='h' && str[1]=='i'){
      return 1+countHi2(str.substring(2));
    }return countHi2(str.substring(1));
}

console.log(countHi2('ahixhi'));
console.log(countHi2('ahibhi'));
console.log(countHi2('xhixhi'));