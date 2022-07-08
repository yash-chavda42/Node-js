function frontPiece(nums){
    len=nums.length;
    if(len<=2){
      return nums;
    }
    array=[];
    array[0]=nums[0];
    array[1]=nums[1];
  return array;

}

console.log(frontPiece([1, 2, 3]));
console.log(frontPiece([1, 2]));
console.log(frontPiece([1]));