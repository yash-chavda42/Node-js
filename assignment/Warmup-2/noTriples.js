function noTriples(nums){
    if(nums.length<=2){
      return true;
    }
    for(i=0;i<nums.length-2;i=i+1){
      if(nums[i]==nums[i+1] && nums[i]==nums[i+2]){
        return false;
      }
    }
    return true;
}

//test case
console.log(noTriples([1,1,2,2,1]));
console.log(noTriples([1,1,2,2,2,1]));
console.log(noTriples([1,1,2,2,2,1]));