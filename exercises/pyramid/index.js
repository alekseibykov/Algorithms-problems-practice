// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  let midpoint = Math.floor((n * 2 - 1) / 2);
  let col = level.length;
  if (n === row) {
    return
  }
  if (n * 2 - 1 === col) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const add = midpoint + row >= col && midpoint - row <=col ? '#' : ' ';
  return pyramid(n, row, level + add);
}

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < n * 2 - 1; col++) {
//       if (Math.floor((n * 2 - 1) / 2) + row >= col &&
//           Math.floor((n * 2 - 1) / 2) - row <= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
