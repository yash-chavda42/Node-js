function alarmClock(day, vacation){
    if (vacation) {
      if(day > 0 && day != 6)
        return "10:00";
      else
        return "off";
    } else if (day > 0 && day != 6)
        return "7:00";
      else
        return "10:00";
}

console.log(alarmClock(1, false));
console.log(alarmClock(5, false));
console.log(alarmClock(0, false));
