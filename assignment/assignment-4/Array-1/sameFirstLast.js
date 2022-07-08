function sameFirstLast(nums){
    if(nums.length==0)
    {
      return false;
    }
    if(nums[0]==nums[nums.length-1])
    {
         return  true;
     }else{
      return false;
    }
  
}

console.log(sameFirstLast([1, 2, 3]));
console.log(sameFirstLast([1, 2, 3, 1]));
console.log(sameFirstLast([1, 2, 1]));