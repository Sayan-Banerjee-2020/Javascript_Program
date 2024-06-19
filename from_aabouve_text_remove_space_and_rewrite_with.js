function areThereDuplicates(...args) {
 const frequencyCounter = {};
    for(let arg of args){
        if(frequencyCounter[arg]){
            return true;
        }
        frequencyCounter[arg] = 1;
    }
    
    return false;
}


const result = areThereDuplicates(1,2,3,1)
console.log(result);
