function endUp(str){
    if(str.length>3)
      return str.slice(0,str.length-3)+(str.slice(-3)).toUpperCase()
    else
      return str.toUpperCase();
}

//test case
console.log(endUp('Hello'));
console.log(endUp('hi there'));
console.log(endUp('hi'));