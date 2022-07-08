function rotateLeft3(nums){
    const array = [];
    for (let i = 0; i < nums.length-1; i++) {
      array.push(nums[i+1]);
    }
    //array[nums.lenght-1]=nums[0];
    array.push(nums[0]);
    return array;
}

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7,0, 0]));