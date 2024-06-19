const arr = [1, 2, 3, { name: "Sayan" }, [4, [5, 6]], 7, 8];

const result = flattenArray(arr, []);
console.log("result", result); // [1,2,3,{name:"Sayan"},4,5,6,7,8]

function flattenArray(arr, flattenedArray) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // console.log("need to be flatten, array",arr[i])
            flattenArray(arr[i], flattenedArray)
        }
        else {
            // console.log("single element not array",arr[i])
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
}