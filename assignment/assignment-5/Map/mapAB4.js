function mapAB4(someMap){
    if (someMap.has("a") && someMap.has("b")) {
      if (someMap.get("a").length == someMap.get("b").length) {
        someMap.set("a", "");
        someMap.set("b", "");
      } else if (someMap.get("a").length > someMap.get("b").length) {
        someMap.set("c", someMap.get("a"));
      } else {
        someMap.set("c", someMap.get("b"));
      }
    }
    return someMap;
}

console.log(mapAB4({'a': 'aaa', 'b': 'bb', 'c': 'cake'}));