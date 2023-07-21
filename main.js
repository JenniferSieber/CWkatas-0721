// 6kyu, 7kyu, 8kyu
// KATA 1 6kyu
// https://www.codewars.com/kata/525821ce8e7b0d240b002615/train/javascript 
function camelize(str) {
  let arr = str.toLowerCase().replace(/[^A-Za-z0-9\s]/g, ' ').split(' '); 
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

console.log(camelize("java script"));
console.log(camelize("your-NaMe-here" ));
console.log(camelize("testing ABC"));

// KATA 2 6kyu
// https://www.codewars.com/kata/581f4ac139dc423f04000b99
function transposeTwoStrings (arr) {
  let result = [];
  let len = Math.max(arr[0].length, arr[1].length);
  
  for (let i = 0; i < len; i++) {
    let column = `${(arr[0][i] || ' ')} ${(arr[1][i] || ' ')}`;
    result.push(column);
  }
  return result.join('\n');
}

console.log(transposeTwoStrings(['Hello', 'World']));

// KATA 3 7kyu
// https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript
function tacofy(word) {
  let arr = word.split('');
  let taco = [];
  taco.unshift('shell');
  let result = arr.forEach(letter => {
    if (letter.match(/[c]/gi)) {
      taco.push('cheese');
    }
    else if (letter.match(/[g]/gi)) {
      taco.push('guacamole');
    }
    else if (letter.match(/[l]/gi)) {
      taco.push('lettuce');
    }
    else if (letter.match(/[s]/gi)) {
      taco.push('salsa');
    }
    else if (letter.match(/[t]/gi)) {
      taco.push('tomato');
    }
    else if (letter.match(/[aeiou]/gi)) {
      taco.push('beef');
    }
  })

  taco.push('shell');

  return taco;
}

console.log(tacofy(''));
console.log(tacofy('Aa'));
console.log(tacofy('ggg'));
console.log(tacofy('ogl'));
console.log(tacofy('ydjkpwqrzto'));

// KATA 4 6kyu
// https://www.codewars.com/kata/556021360863a1708900007b/train/javascript
function checkValidTrNumber(n) {
  let numStr = n.toString();
  if (numStr.length !== 11) return false;

  let arr = numStr.split('').map(Number);
  if (arr[0] === 0) return false;
           
  let sum1 = arr[1] + arr[3] + arr[5] + arr[7];
  let sum2 = (arr[0] + arr[2] + arr[4] + arr[6] + arr[8]) * 7;
  if ((sum2 - sum1) % 10 !== arr[9]) return false;

  let total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
  if (total % 10 !== arr[10]) return false;

  return true;
}

console.log(checkValidTrNumber(06637640050));
console.log(checkValidTrNumber(36637640050));
console.log(checkValidTrNumber(!6637640050));
console.log(checkValidTrNumber(12762438338));
console.log(checkValidTrNumber(38338));

// KATA 5 6kyu
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
//hash map
function twoSum(nums, target) {
  const numIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    
    if (complement in numIndexMap) {
      
      return [numIndexMap[complement], i];
    }
    numIndexMap[num] = i;
  } 
}

console.log(twoSum([1,2,3], 4));
console.log(twoSum([1234,5678,9012], 14690));
