function in1To10(n, outsideMode){
    if (!outsideMode){
      if (n >= 1 && n <= 10) {
        return true;
      } else {
          return false;
        }
    } else {
        if (n <= 1 || n >= 10) {
          return true;
        } else {
            return false;
          }
      }
  
}
console.log(in1To10(5, false));
console.log(in1To10(11, false));
console.log(in1To10(11, true));