function mirrorEnds(string){
    len = string.length;
    fin = "";
    tmp1 = "";
    tmp2 = "";
    for (i = 0; i < len; i++) {
      tmp1 += string.substring(i,i+1);
      tmp2 = "";
      for (j = tmp1.length-1; j >= 0; j--) {
        tmp2 += tmp1.substring(j,j+1);
        if (tmp2==string.substring(len-i-1,len))
          fin = tmp1;
      }
    }
    return fin;
  
}

console.log(mirrorEnds('abXYZba'));
console.log(mirrorEnds('abca'));
console.log(mirrorEnds('aba'));