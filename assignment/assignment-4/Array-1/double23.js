function double23(nums){
    if(nums.length<=1){
      return false;
    }
    else if(nums[0]==2 && nums[1]==2){
      return true;
    }
    else if(nums[0]==3 && nums[1]==3){
      return true;
    }else{
      return false;
    }
}

console.log(double23([2, 2]));
console.log(double23([3, 3]));
console.log(double23([2, 3]));