function fix45(nums){
    i = 0;
    j = 0;
        
    while(j < nums.length && nums[j] != 5)
        j++;
                  
    while(i < nums.length) {
        if(nums[i] == 4) {
            temp = nums[i+1];
            nums[i+1] = nums[j];
            nums[j] = temp;
                                                
            while((j < nums.length && nums[j] != 5) || j == i + 1)
                j++;
        }
        i++;
    }
                                                                          
    return nums;
}

console.log(fix45([5, 4, 9, 4, 9, 5]));
console.log(fix45([1, 4, 1, 5]));
console.log(fix45([1, 4, 1, 5, 5, 4, 1]));