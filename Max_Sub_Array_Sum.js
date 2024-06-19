function maxSubArraySum(arr,num){
    let maxSum = 0 ;
    let tempSum = 0 ;

    if(arr.length<num){
        return null;
    }
    for(let i=0;i<num;i++){
        maxSum += arr[i]; 
    }
    
    tempSum = maxSum;

    for(let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i] ;
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}

const result = maxSubArraySum([10, 20, 30, 40, 50], 3);
console.log(result);