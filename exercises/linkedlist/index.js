// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    let node = this.head;
    while (node ? node.next : null) {
      node = node.next;
    }
    return node;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    this.head = this.head ? this.head.next : null;
  }

  removeLast () {
    // let node = this.head;
    // let prev;
    // while (node ? node.next : null) {
    //   prev = node;
    //   node = node.next;
    // }
    // if (prev) {
    //   prev.next = null;
    // } else {
    //   this.head = null;
    // }


    let node = this.head;
    let prev;
    if (!node) {
      return;
    }
    if (!node.next) {
      this.head = null;
      return;
    }
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast (data) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    let prev = this.getAt(index - 1);
    let node = this.getAt(index);

    if (index <= 0) {
      this.head = this.head ? this.head.next : null;
      return;
    }

    if (prev && node) {
      prev.next = node.next;
    }
  }

  insertAt(data, index) {
    let prev = this.getAt(index - 1);
    let node = this.getAt(index);

    if (index === 0) {
      let firstNode = this.head;
      this.head = new Node(data, firstNode);
    }

    if (index >= this.size()) {
      this.insertLast(data);
    }

    if (prev && node) {
      prev.next = new Node(data, node);
    }
  }

  forEach(fn) {
    let counter = 0;
    let node = this.head;
    while (node) {
      fn(node, counter);
      counter++;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
