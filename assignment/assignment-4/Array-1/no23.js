function no23(nums){
    if(nums[0]!=2 && nums[0]!=3 && nums[1]!=3 && nums[1]!=2){
      return true;
    }return false;
}

console.log(no23([4, 5]));
console.log(no23([4, 2]));
console.log(no23([3, 5]));