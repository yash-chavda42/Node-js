function unlucky1(nums){
    if(nums[nums.length-1]==1 && nums[nums.length-2]==3 && nums.length>3){
      return false;
    }
    for(i=0;i<nums.length;i++){
      if(nums[i]==1 && nums[i+1]==3){
        return true;
      }
    }return false;
}

console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));