function arrayFront9(nums){
    flag=0
    if(nums.length>=4){
      limit=4;
    }
    else{
      limit=nums.length;
    }
    count=0;
    for(i=0;i<limit;i=i+1)
    {  
      if(nums[i]==9){
        flag=1
        return true;
      }
    }
    if(flag==0){
      return false;
    }
}

//test case
console.log(arrayFront9([1,2,9,3,4]));
console.log(arrayFront9([1,2,3,4,9]));
console.log(arrayFront9([1,2,3,4,5]));