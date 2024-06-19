
function valueCheck(val){
    let myArr = [2,1,6,8,3,6,0,3,9,10]

    console.log(val)
    let newArr = []
    for(let i=0;i<myArr.length;i++){
        if(myArr[i]>val){
            newArr.push(myArr[i])
        }
    }
    return newArr;
}

let result = valueCheck(3)
console.log(result)
