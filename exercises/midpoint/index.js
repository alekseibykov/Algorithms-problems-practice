// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // if (!list.head) {
  //   return null;
  // }
  //
  // let slow = 0;
  // let fast = 0;
  // let node = list.head;
  // let prev = {};
  //
  // while (node) {
  //   if (!node.next) {
  //     return list.getAt(slow);
  //   }
  //
  //   slow++;
  //   fast += 2;
  //   node = list.getAt(fast);
  // }
  //
  // return list.getAt(slow - 1);

  
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
