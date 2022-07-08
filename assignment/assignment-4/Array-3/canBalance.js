function canBalance(nums){
    first = 0;
    second = 0;
      
    for(i = 0; i < nums.length; i++)
        second += nums[i];
              
    for(i = 0; i <= nums.length - 2; i++) {
        first += nums[i];
        second -= nums[i];
                            
        if(first == second)
            return true;
    }
                                          
    return false;
}

console.log(canBalance([1, 1, 1, 2, 1]));
console.log(canBalance([2, 1, 1, 2, 1]));
console.log(canBalance([10, 10]));