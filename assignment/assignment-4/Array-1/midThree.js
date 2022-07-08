function midThree(nums){
    myArray = [];
    middle = Math.round(nums.length / 2)-1;
    myArray[0] = nums[middle-1];
    myArray[1] = nums[middle];
    myArray[2] = nums[middle+1];
    
    return myArray;
  
}

console.log(midThree([1, 2, 3, 4, 5]));
console.log(midThree([8, 6, 7, 5, 3, 0, 9]));
console.log(midThree([1, 2, 3]));