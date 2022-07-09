function mapShare(someMap){
    someMap.delete("c");
    if (someMap.has("a")) {
      someMap.set("b", someMap.get("a"));
    }
    return someMap;
}

console.log(mapShare({'a': 'aaa', 'b': 'bbb', 'c': 'ccc'}));