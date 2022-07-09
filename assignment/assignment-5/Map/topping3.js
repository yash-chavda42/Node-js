function topping3(someMap){
    if (someMap.has("potato")) {
      someMap.set("fries", someMap.get("potato"));
    }
    if (someMap.has("salad")) {
      someMap.set("spinach", someMap.get("salad"));
    }
    return someMap;
}

console.log(topping3({'potato': 'ketchup'}));