function maxSpan(nums){
    max = 0;
    for(i = 0; i < nums.length; i++) {
        j = nums.length - 1;
        while(nums[i] != nums[j])
            j--;
        span = j - i + 1;                      
        if(span > max)
            max = span;
    }                       
    return max;
  
}

console.log(maxSpan([1, 2, 1, 1, 3]));
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4]));