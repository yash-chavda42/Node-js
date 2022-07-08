function makeEnds(nums){
    array=[];
    if(nums.length==1){
      array[0]=nums[0];
      array[1]=nums[0];
      return array;
    }
    else{
      
      array[0]=nums[0];
      array[1]=nums[nums.length-1];
      return array;
  
    }
}

console.log(makeEnds([1, 2, 3]));
console.log(makeEnds([1, 2, 3, 4]));
console.log(makeEnds([7, 4, 6, 2]));