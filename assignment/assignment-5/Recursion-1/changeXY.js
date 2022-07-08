function changeXY(str){
    if(str.length == 0)
      return str;
     if(str[0] == 'x')
          return 'y' + changeXY(str.substring(1));
                      
      return str[0] + changeXY(str.substring(1));
}

console.log(changeXY('codex'));
console.log(changeXY('xxhixx'));
console.log(changeXY('xhixhix'));