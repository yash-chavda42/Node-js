function endOther(a, b){
    a = a.toLowerCase();
    aLen = a.length;
  
    b = b.toLowerCase();
    bLen =b.length;
  
    if (aLen < bLen){
      temp = b.substring(bLen - aLen, bLen);
      if (temp==a){
        return true;
      }
      else{
        return false;
      }
    }else {
      temp = a.substring(aLen - bLen, aLen);
      if (temp==b){
        return true;
      }
      else{
        return false;
      }
    }
}

console.log(endOther('Hiabc', 'abc'));
console.log(endOther('AbC', 'HiaBc'));
console.log(endOther('abc', 'abXabc'));