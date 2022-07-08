function makeLast(nums){
    array=[]
    lennums=nums.length;
    for(i=0;i<lennums*2-1;i++){
      array.push(0);
    }
    array.push(nums[lennums-1]);
    return array;
}

console.log(makeLast([4, 5, 6]));
console.log(makeLast([1, 2]));
console.log(makeLast([3]));