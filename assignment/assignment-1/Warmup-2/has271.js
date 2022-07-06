function has271(nums){
    if(nums.length<=2){
      return true;
    }
    for(i=0;i<nums.length-2;i=i+1){
      if(nums[i]==2 && nums[i+1]==7 && nums[i+2]==1){
        return true;
      }
    }
    return false;
}

//test case
console.log(has271([1,2,7,1]));
console.log(has271([1,2,8,1]));
console.log(has271([2,7,1]));