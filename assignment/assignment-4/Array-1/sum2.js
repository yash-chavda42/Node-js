function sum2(nums){
    if(nums.length==0){
        return 0;
    }
    
    if(nums.length<=1){
        return nums[0];
    }
    return nums[0]+nums[1];
}

console.log(sum2([1, 2, 3]));
console.log(sum2([1, 1]));
console.log(sum2([1, 1, 1, 1, 1]));