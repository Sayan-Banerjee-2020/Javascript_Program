function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !==str2.length){
      return false;
  }
  let str1Obj = {}
  let str2Obj = {}
  for(let val of str1){
                console.log("str1 val==>",val);
      str1Obj[val]=(str1Obj[val]||0)+1;
  }
  for(let val of str2){
          console.log("str2 val==>",val);
      str2Obj[val]=(str2Obj[val]||0)+1;
  }
    console.log("str1obj",str1Obj);
    console.log("str2Obj",str2Obj)
  for(let key in str1Obj){
      if(str1Obj[key]!==str2Obj[key]){
          return false;
      }
  }
  return true;
}
let output = validAnagram('sani','asin')
console.log("output",output);

