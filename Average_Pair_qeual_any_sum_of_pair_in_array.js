function averagePair(arr,avg){
    const frequencyCounter = {};
    for(let val of arr){
        frequencyCounter[val] = (frequencyCounter[val]|| 0)+val;
    }
    console.log("frequencyCounter",frequencyCounter)
    let values = Object.values(frequencyCounter);
    console.log("values",values);
    let sum = values.reduce((acc, val) => acc + val, 0);
    console.log("sum",sum);
    let myAvg = sum / values.length
    console.log("average",myAvg);

}

const result = averagePair([1,2,2,3],2.5)
// console.log(result);