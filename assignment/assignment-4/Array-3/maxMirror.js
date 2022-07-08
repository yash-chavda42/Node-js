function maxMirror(nums){
    max = 0;
    
    for(i = 0; i < nums.length; i++) {
        count = 0;
        for(j = nums.length - 1; j >= 0 && i + count < nums.length; j--) {
            if(nums[i + count] == nums[j]) {
                count++;
            } else {
                max = Math.max(max, count);
                count = 0;
            }
        }
                                                                
        max = Math.max(max, count);
    }

    return max;
}

console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1]));
console.log(maxMirror([1, 2, 1, 4]));
console.log(maxMirror([7, 1, 2, 9, 7, 2, 1]));