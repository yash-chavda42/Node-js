function squirrelPlay(temp, isSummer){
    if (isSummer && temp <= 100 && temp >= 60)
     return true;
   if (!(isSummer) && temp <= 90 && temp >=60)
     return true;
   else
     return false;
}

console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));