function sumDigits(str){
    len = str.length;
    sum = 0;
    for(i = 0; i < len; i++) {
      if (!isNaN(str[i])) {
        tmp = str.substring(i,i+1);
        sum += parseInt(tmp);
      }
    }
    return sum;
  
}

console.log(sumDigits('aa1bc2d3'));
console.log(sumDigits('aa11b33'));
console.log(sumDigits('Chocolate'));