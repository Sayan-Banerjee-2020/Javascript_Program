function StringExpression(str) {
  const numDict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // Split the input string into words
  const words = str.match(/[a-z]+/g);

  if (!words) {
    return '';
  }

  let result = 0;
  let currentNum = 0;
  let isNegative = false;

  for (const word of words) {
    if (word === 'minus') {
      isNegative = true;
    } else if (word === 'plus') {
      isNegative = false;
    } else {
      currentNum = numDict[word];
      if (currentNum !== undefined) {
        if (isNegative) {
          currentNum = -currentNum;
          isNegative = false; // Reset the negative flag
        }
        result += currentNum;
      }
    }
  }

  // Convert the result to its written-out form
  let resultStr = result.toString();
  let resultWords = '';

  for (let i = 0; i < resultStr.length; i++) {
    const digit = resultStr[i];
    for (const key in numDict) {
      if (numDict[key] === digit) {
        resultWords += key;
        break;
      }
    }
  }

  // If the result is negative, add "negative" to the beginning
  if (result < 0) {
    resultWords = 'negative' + resultWords;
  }

  console.log("resultWords",resultWords)
  return resultWords;
}

// Test case
console.log("result",StringExpression("onezeropluseight")); // Output: "oneeight"
