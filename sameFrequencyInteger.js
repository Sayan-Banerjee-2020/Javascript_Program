
function sameFrequencyInteger (num1,num2) {

    let firstCharObj = {};
    let secondCharObj = {};
    
    let str1 = num1.toString();
    for(let char of str1){
        firstCharObj[char] = (firstCharObj[char]||0)+1 ;
    }
    
    let str2 = num2.toString();
    for(let char of str2){
       secondCharObj[char] = (secondCharObj[char]||0)+1;
    }
    
    for (let digit in firstCharObj) {
        if(firstCharObj[digit] !== secondCharObj[digit]){
            return false ;
        }
    }   

    for (let digit in secondCharObj) {
        if(!(digit in firstCharObj)){
            return false;
        }
        
    }
    
    return true;
}

const num1 = 12435;
const num2 = 12345;

const result = sameFrequencyInteger(num1, num2);
console.log(result);






