function mapAB2(someMap){
    let temp1 = someMap.get("a");
    let temp2 = someMap.get("b");
    if (temp1 != null && temp2 != null && temp1 == temp2) {
      someMap.delete("a");
      someMap.delete("b");
    }
    return someMap;
}

console.log(mapAB2({'a': 'aaa', 'b': 'aaa', 'c': 'cake'}));