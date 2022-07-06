function front3(str){
    if(str.length>3)
      return (str.slice(0,3)).repeat(3);
    else
      return (str.repeat(3));
}

//test case
console.log(front3('Java'));
console.log(front3('Chocolate'));
console.log(front3('abc'));