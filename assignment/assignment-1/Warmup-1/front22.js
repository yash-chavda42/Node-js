function front22(str){
    l=str.length-1;
    if(l>=1)
      return str[0]+str[1]+str+str[0]+str[1];
    else
      return str.repeat(3)
}

//test case
console.log(front22('kitten'));
console.log(front22('Ha'));
console.log(front22('abc'));
