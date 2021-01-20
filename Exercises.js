//Question 1
function myReverse(str) {
  let reversedStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }
  return reversedStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for(let i = 0; i < str.length; i++) {
    let curStr = str[i];
    combinations.push(curStr);
    if (i < str.length - 1){
      for(let j = i + 1; j < str.length; j++) {
        curStr += str[j];
        combinations.push(curStr);
      }
    }
  }
  
  return combinations;
}

//Question 3
function allCaps(str) {
  const strArr = str.split(" ");
  for(let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    strArr[i] = word.charAt(0).toUpperCase() + word.slice(1, word.length);
  }
  return strArr.join(" ");
}

//Question 4
function myPower(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
      result *= x;
  }
  return result;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log(allCaps('the quick brown fox'));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
