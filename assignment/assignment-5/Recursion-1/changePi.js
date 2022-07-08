function changePi(str){
    if(str.length <= 1)
          return str;
    if(str.substring(0, 2)=="pi")
          return "3.14" + changePi(str.substring(2));
                      
    return str[0] + changePi(str.substring(1));
}

console.log(changePi('xpix'));
console.log(changePi('pipi'));
console.log(changePi('pip'));