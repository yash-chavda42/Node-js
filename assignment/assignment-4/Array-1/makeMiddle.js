function makeMiddle(nums){
    array=[]
    lena=nums.length;
    //return lena/2;
    array[0]=nums[(lena/2)-1];
    array[1]=nums[lena/2];
    return array;
}

console.log(makeMiddle([1, 2, 3, 4]));
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));
console.log(makeMiddle([1, 2]));