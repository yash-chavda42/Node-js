function cigarParty(cigars, isWeekend){
    if (isWeekend == true && cigars >= 40)
      return true;
    if (!(isWeekend) && cigars >=40 && cigars <= 60)
      return true;
    else
      return false;
}

console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));