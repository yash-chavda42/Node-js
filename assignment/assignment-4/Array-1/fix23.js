function fix23(nums){
    array=[];
    for(i=0;i<nums.length;i++){
      if(nums[i]==3 && nums[i-1]==2){
        array.push(0);
      }else{
        array.push(nums[i]);
      }
    }
    return array;
}

console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));