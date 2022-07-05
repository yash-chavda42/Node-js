function frontTimes(str, n){
    if(str.length>3)
      return (str.slice(0,3)).repeat(n);
    else
      return str.repeat(n);
}

//test case
console.log(frontTimes('Chocolate', 2));
console.log(frontTimes('Chocolate', 3));
console.log(frontTimes('Abc', 3));