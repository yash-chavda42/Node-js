function sleepIn(weekday, vacation){
    if(weekday==true && vacation==false){
      return false;
    }else{
      return true;
    }
    
}

//testcase
console.log(sleepIn(true, true)); 
console.log(sleepIn(true, false)); 
console.log(sleepIn(false, true)); 
