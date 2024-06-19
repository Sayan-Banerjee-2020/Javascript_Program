let myArr = [2,6,4,8,0,3,1,10,1,3,0,8,4,6,2]
// let myArr = [4,2,6,3,5,4]


let myPeak = []

function checkPeak() {
    for(let i=0;i<myArr.length;i++){
        if(i==0||myArr[i]>myArr[i+1]){
            myPeak.push(myArr[i])
        }
        else if(i==myArr.length-1||myArr[i]>myArr[i-1]){
            myPeak.push(myArr[i])
        }
    }
    return myPeak
}

let result = checkPeak()
console.log(result)