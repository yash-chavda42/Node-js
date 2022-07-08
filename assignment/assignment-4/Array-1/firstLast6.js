function firstLast6(nums){
    if(nums[0]==6 || nums[nums.length-1]==6)
    {
         return  true;
     }else{
      return false;
    }
    
    return nums[0]==6 || nums[nums.length-1]
}

console.log(firstLast6([1, 2, 6]));
console.log(firstLast6([6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 3]));
  