// task 1

function palindrome(txt) {
    return txt.split('').reverse().join('') === txt;
}
let text = "madam";
let isPalindrome = palindrome(text);
console.log(isPalindrome); 

// task 2

function firstNonRepeatingChar(str) {
    let charCounts = {};
  
    for (let i = 0; i < str.length; i++) {
      charCounts[str[i]] = charCounts[str[i]] + 1 || 1;
    }
  
    for (let i = 0; i < str.length; i++) {
      if (charCounts[str[i]] === 1) {
        return str[i];
      }
    }
  
    return null;
}
let str = "bcskbrk";
let firstNonRep = firstNonRepeatingChar(str);
console.log(firstNonRep);

// task 3

function camelize(str) {
    let words = str.split(" ");
    let camelCase = "";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0) {
        camelCase += word.toLowerCase();
      } else {
        camelCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }
  
    return camelCase;
  }
  let stra = "sad midis Matarebeli";
  let camelized = camelize(stra);
  console.log(camelized); 
  
// task 4

function normalize(num) {
    if (num <= 0) {
        return 'Invalid input';
    }

    const lastDigit = num % 10;
    const secondToLastDigit = Math.floor(num / 10) % 10;

    let suffix = 'th';
    if (lastDigit === 1 && num !== 11) {
        suffix = 'st';
    } else if (lastDigit === 2 && num !== 12) {
        suffix = 'nd';
    } else if (lastDigit === 3 && num !== 13) {
        suffix = 'rd';
    }

    return `${num}${suffix}`;
}
console.log(normalize(121)); 
console.log(normalize(124)); 
console.log(normalize(33));

// task 5
function mostFrequentElement(arr) {
    let frequency = {};
    arr.forEach(function(value) {
      frequency[value] = (frequency[value] || 0) + 1;
    });
    let max = Object.keys(frequency).reduce(function(a, b) {
      return frequency[a] > frequency[b] ? a : b;
    });
    return `${max} - ${frequency[max]}`;
  }
  let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  let result = mostFrequentElement(arr);
  console.log(result);

// task 6
    function mergeArrays(array1, array2) {
    let result = array1.concat(array2);
    return Array.from(new Set(result));
 }
 
 let array1 = [1, 2, 3];
 let array2 = [2, 30, 1];
 let mergedArray = mergeArrays(array1, array2);
 console.log(mergedArray);
 
 // task 7

 function readyToPutInTheDOM(arr) {
  return arr.map(({ Name, age }) => `<h1>${Name}</h1><h2>${age}</h2>`);
}
console.log(
  readyToPutInTheDOM([
    {
      Name: "Angelina Jolie",
      age: 80,
    },
    {
      Name: "Eric Jones",
      age: 2,
    },
    {
      Name: "Paris Hilton",
      age: 5,
    },
    {
      Name: "Kane West",
      age: 16,
    },
    {
      Name: "Bob Zirol",
      age: 100,
    },
  ])
);

// Task 8
function countSequences(arr) {
  let count = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      currentCount++;
      if (currentCount >= 4) {
        count++;
        currentCount = 0;
      }
    } else {
      currentCount = 0;
    }
  }

  return count;
}
let arr1 = [0, 0, 0, 0, 0, 1];
let arr2 = [0, 0, 0, 0, 1, 0, 0, 0, 0];
let arr3 = [0, 0, 0, 1, 0];
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [];

console.log(countSequences(arr1)); 
console.log(countSequences(arr2)); 
console.log(countSequences(arr3));
console.log(countSequences(arr4));
console.log(countSequences(arr5)); 
// Task 9

function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
console.log(sumOfDigits(1312)); 
