function topping1(someMap){
    if (someMap.has("ice cream")) {
      someMap.set("ice cream", "cherry");
    }
    someMap.set("bread", "butter");
    return someMap;
}

console.log(topping1({'ice cream': 'peanuts'}));