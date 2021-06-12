//Rest parameter -> ...nums

var product = function(x:number,y:number,...nums:number[]){
    console.log(x);
    console.log(y);

    var result=x*y;
    
    for(var i=0;i<nums.length;i++)
    {
        console.log(nums[i]);
        result*=nums[i];
    }
    return result;
}

console.log(product(1,2,3,4,5));

console.log("-----------------------------");