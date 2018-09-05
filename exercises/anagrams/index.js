// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let wordA = stringA.replace(/[^\w]/g).toLowerCase().split('').sort().join();
  let wordB = stringB.replace(/[^\w]/g).toLowerCase().split('').sort().join();
  return wordA === wordB;
}


// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   let charMap = {};
//   for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }


// function anagrams(stringA, stringB) {
//   const wordA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const wordB = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//   charMapA = [];
//   charMapB = [];
//
//   for (let char of wordA) {
//     charMapA[char] = charMapA[char] + 1 || 1;
//   }
//   for (let char of wordB) {
//     charMapB[char] = charMapB[char] + 1 || 1;
//   }
//
//   let isAnagram = true;
//   Object.keys(charMapA).forEach((elem) => {
//     if (!(charMapA[elem] === charMapB[elem])) {
//       isAnagram = false;
//     }
//   });
//
//   Object.keys(charMapB).forEach((elem) => {
//     if (!(charMapB[elem] === charMapA[elem])) {
//       isAnagram = false;
//     }
//   });
//
//   return isAnagram;
// }

module.exports = anagrams;
