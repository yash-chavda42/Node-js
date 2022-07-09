function mapAB(someMap){
    if (someMap.has("a") && someMap.has("b")) {
      someMap.set("ab", someMap.get("a") + someMap.get("b"));
    }
    return someMap;
}

console.log(mapAB({'a': 'Hi', 'b': 'There'}) → {'a': 'Hi', 'b': 'There', 'ab': 'HiThere'});
console.log(mapAB({'a': 'Hi'}));
console.log(mapAB({'b': 'There'}));