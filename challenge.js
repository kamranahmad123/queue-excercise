// Start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}
class LinkedList {
  head = null;
  add(num) {
    let node = new Node(num);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next_node) {
        currentNode = currentNode.next_node;
      }
      currentNode.next_node = new Node(num);
    }
  }
get(index) {
    let currentNode = this.head;
    let counter = 1;
    while (currentNode.next_node && counter <= index) {
      currentNode = currentNode.next_node;
      counter++;
    }
    if (counter <= index) {
      return "index out of bounds";
    }
    if (index < 0) {
      return "incorrect index";
    }
    return currentNode.value;
  }
  get_node(index) {
    let currentNode = this.head;
    let counter = 1;
    while (currentNode.next_node && counter <= index) {
      currentNode = currentNode.next_node;
      counter++;
    }
    if (counter <= index) {
      return "index out of bounds";
    }
    if (index < 0) {
      return "incorrect index";
    }
    return currentNode;
  }
   addAt(index, value) {
    let newNode = new Node(value);
    if(this.head===null){
        this.head=newNode
        return
    }
    if (this.head.value === this.get_node(index).value) {
      newNode.next_node = this.head;
      this.head = newNode;
      return
    }
    let currentNode = this.head;
    while (currentNode.next_node) {
      if (currentNode.next_node.value === this.get_node(index).value) {
        newNode.next_node = currentNode.next_node;
        currentNode.next_node = newNode;
        return
      }
      currentNode = currentNode.next_node;
    }
  }
 remove(index) {
    if (this.head === null) {
      return;
    }
    if (this.head.value === this.get_node(index).value) {
      this.head = this.head.next_node;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next_node) {
      if (currentNode.next_node.value === this.get_node(index).value) {
        currentNode.next_node = this.get_node(index).next_node;
        return;
      }
      currentNode = currentNode.next_node;
    }
  }
}
class Queue extends LinkedList{
  add(number) {
    // your code here
    super.add(number)
  }
  
  remove() {
    // your code here
    if(this.head===null){
      return -1
    }
    let dequeuedValue=this.head.value
    this.head=this.head.next_node
    return dequeuedValue
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1
module.exports = Queue