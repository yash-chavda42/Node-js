function has23(nums){
    if(nums[0]==2 || nums[0]==3 || nums[1]==3 || nums[1]==2){
      return true;
    }return false;
}

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));