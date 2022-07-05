function notString(str){
    let part = str.slice(0,3);
    if(part=='not')
      return str;
    else
      return 'not '+str;
}

//test case
console.log(notString('candy'));
console.log(notString('x'));
console.log(notString('not bad'));