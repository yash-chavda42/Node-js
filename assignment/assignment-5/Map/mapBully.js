function mapBully(someMap){
    if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

console.log(mapBully({'a': 'candy', 'b': 'dirt'}));