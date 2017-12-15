// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      maxChar = char;
      max = charMap[char];
    }
  }
  
  return maxChar;
}

// function maxChar(str) {
//   let obj = {};
//   str.split('').forEach((char) => {
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   });
//
//   let max = 0;
//   for (const prop in obj) {
//     max = obj[prop] > max ? prop : max;
//   }
//
//   return max;
// }

module.exports = maxChar;
