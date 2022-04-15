var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var traverse = function (currentNode) {
      if (currentNode.next === null) {
        list.tail = Node(value);
        currentNode.next = Node(value);
      } else {
        traverse(currentNode.next);
      }
    };
    //base case
    if (list.head === null) {
      list.head = Node(value);
    } else {

      //if head is not null, meaning our linkedList has an unknown number of nodes
      //check the "next" value of each node until we find a "next" key that is equal to null
      //if next is null
      //set next value to Node(value)
      if (this.head.next === null) {
        this.head.next = Node(value);
        list.tail = Node(value);
      } else {
        traverse(this.head);
      }

    }
    list.tail = Node(value);
  };

  list.removeHead = function () {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function (target) {

  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var linkedList = LinkedList();
linkedList.addToTail(5);
linkedList.addToTail(4);
linkedList.addToTail(3);
linkedList.addToTail(2);
console.log({linkedList});



/*

list = {

head: {
  value: 5
  next: {
    value: 4,
    next: null //adding to linkedlist goes here
  }
},
tail: {
  value: 4,
  next: null
}

}

*/