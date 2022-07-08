function maxEnd3(nums){
    array=[]
    if(nums[0]>nums[nums.length-1]){
        array[0]= nums[0];
        array[1]= nums[0];
        array[2]= nums[0];
        return array;
    }
    array[0]= nums[nums.length-1];
    array[1]= nums[nums.length-1];
    array[2]= nums[nums.length-1];
    return array;
  
}

console.log(maxEnd3([1, 2, 3]));
console.log(maxEnd3([11, 5, 9]));
console.log(maxEnd3([2, 11, 3]));