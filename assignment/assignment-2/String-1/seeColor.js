function seeColor(str){
    if(str.startsWith("red")){
      return 'red';
    }else if(str.startsWith("blue")){
      return 'blue';
    }else{
      return '';
    }
}

console.log(seeColor('redxx'));
console.log(seeColor('xxred'));
console.log(seeColor('blueTimes'));