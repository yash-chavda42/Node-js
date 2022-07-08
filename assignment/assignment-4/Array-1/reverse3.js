function reverse3(nums){
    myArray=[];
    myArray[0] = nums[2];
    myArray[1] = nums[1];
    myArray[2] = nums[0];
    return myArray
  
}

console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));