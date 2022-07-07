function countCode(str){
    count1=0
    for(i=0;i<str.length-3;i++){
      if(str.slice(i,i+2)=='co' && str[i+3]=='e'){
        count1+=1
      }
    }
    return count1;
}

console.log(countCode('aaacodebbb'));
console.log(countCode('codexxcode'));
console.log(countCode('cozexxcope'));