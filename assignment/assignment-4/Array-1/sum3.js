function sum3(nums){
    sum=0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
}

console.log(sum3([1, 2, 3]));
console.log(sum3([5, 11, 2]));
console.log(sum3([7, 0, 0]));