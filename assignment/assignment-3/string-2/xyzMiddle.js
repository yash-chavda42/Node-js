function xyzMiddle(str){
    xyz = "xyz";
    len = str.length;
    middle = len / 2;
    if (len < 3)
      return false;
    if (len % 2 != 0) {
      if (str.substring(middle-1,middle+2)=='xyz') {
        return true;
      } else {
          return false;
        }
    } else if (str.substring(middle-1,middle+2)=='xyz' ||
        str.substring(middle-2,middle+1)=='xyz') {
            return true
    } else
        return false; 
  
}

console.log(xyzMiddle('AAxyzBB'));