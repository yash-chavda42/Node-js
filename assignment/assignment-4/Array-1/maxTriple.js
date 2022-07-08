function maxTriple(nums){
    max=0;
    myArray = [];
    len=nums.length;
    middle = Math.round(nums.length / 2)-1;
    myArray[0] = nums[0];
    myArray[1] = nums[middle];
    myArray[2] = nums[len-1];
    
    for(i=0;i<3;i++){
      if(max<myArray[i]){
        max=myArray[i];
      }
    }return max;
}


console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));