function swapEnds(nums){
    lens=nums.length;
    if(lens==1){
      return nums;
    }
    array=[];
    array.push(nums[lens-1]);
    for (i = 1; i < nums.length-1; i++) {
      array.push(nums[i]);
    }
    array.push(nums[0]);
    return array;
}

console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));