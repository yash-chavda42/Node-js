function stringE(str){
    count=0
    for (i = 0; i < str.length; i++) {
      if (str[i] == 'e')
        count++;
    }
    if(count>=1 && 3>=count){
      return true;
    }
    else{
      return false;
    }
      
}

//test case

console.log(stringE('Hello'));
console.log(stringE('Heelle'));
console.log(stringE('Heelele'));