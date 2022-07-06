function frontBack(str){
    if(str.length>1)
      return str[(str.length)-1]+str.slice(1,str.length-1)+str[0]
    else
      return str
}

//test case
console.log(frontBack('code'));
console.log(frontBack('a'));
console.log(frontBack('ab'));
