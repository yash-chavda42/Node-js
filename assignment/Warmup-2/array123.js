function array123(nums){
    if(nums[0]==1 && nums[1]==2 && nums[2]==3){
      return true;
    }
    else{
      return false;
    }
}

//test case
console.log(array123('1234'));
console.log(array123('1245'));
console.log(array123('12534'));