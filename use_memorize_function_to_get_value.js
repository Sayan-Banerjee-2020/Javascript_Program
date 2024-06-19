// write a memorized function which take some argument to perform some operation.
// if it called 2nd time with same argument then it the value must be serve from cache.
// implement using map data structure.

const add = (a,b) => a+b ;
const sub = (a, b) => Math.abs(a - b);

const memoizedAdd = memoizedOne(add);
const memoizedSub = memoizedOne(sub);

console.log('add',memoizedAdd(1,2)); // 3
console.log('add',memoizedAdd(1,2)); // 3 from cache

console.log('sub',memoizedSub(5,10)); // 5
console.log('sub',memoizedSub(5,10)); // 5 from cache

const mapDataStructure = new Map();
function memoizedOne(fn) {
    
    function temp(...args) {
        const key = args.join('_');
        if(mapDataStructure.has(key)){
            console.log("getting from cache")
            return mapDataStructure.get(key)
        }
        const result = fn(...args);
        mapDataStructure.set(key, result);
        return result;
    }
    
    return temp;
}
