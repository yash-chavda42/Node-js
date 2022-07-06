function startWord(str, word){
    lenStr = str.length;
    lenWord = word.length;
    if (lenStr == 0)
      return "";
    if (lenWord > lenStr)
      return "";
    if (word.length == 1)
      return str.substring(0,1);
    else if (str.substring(1,lenWord)==word.substring(1,lenWord))
      return str.substring(0,lenWord);
    else
      return "";
  
}

console.log(startWord('hippo', 'hi'));
console.log(startWord('hippo', 'xip'));
console.log(startWord('hippo', 'i'));