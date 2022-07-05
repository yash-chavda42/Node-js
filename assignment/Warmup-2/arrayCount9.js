function arrayCount9(nums){
    count=0;
    for(i=0;i<nums.length;i++){
      if(nums[i]==9){
      count+=1;
      }
    }
    return count;
}

//test case
console.log(arrayCount9([1,2,9]));
console.log(arrayCount9([1,9,9]));
console.log(arrayCount9([1,9,9,3,9]));