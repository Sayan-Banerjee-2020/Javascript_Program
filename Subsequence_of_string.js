function isSubsequence(arg1,arg2) {
    let i = 0;
    let j = 0;

    while(i<arg1.length && j<arg2.length){
        if(arg1[i]==arg2[j]){
            i++;
        }
        j++;
    }
    return i == arg1.length ;
}


const result = isSubsequence('abc', 'abfgbsfcd');
console.log(result);