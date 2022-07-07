function xyBalance(str){
    var list1 = [];
    var list2 = [];
    for(i=0; i<str.length;i++) {
      if (str[i] === "x") list1.push(i);
      if (str[i] === "y") list2.push(i);
    }
   if(str.length==0){
     return true;
   }
   if(list1.length==0 && list2.length==0){
     return true;
   } 
   
   max1=list1.reverse()
   max2=list2.reverse()
   if(max1<max2){
     return true;
   }else{
     return false;
   }
   
 
}

console.log(xyBalance('aaxbby'));