var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function () {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function (target) {

    var hasValue = false;
    var traverse = function (currentNode) {
      if (currentNode.value === target) {
        hasValue = true;
        return;
      } else {
        if (currentNode.next !== null) {
          traverse(currentNode.next);
        }
      }
    };
    traverse(this.head);

    return hasValue;
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
.removeHead - constant time
.addToTail -
constant time
.contains - linear time
 */

var linkedList = LinkedList();
linkedList.addToTail(5);
linkedList.addToTail(4);
linkedList.addToTail(3);
linkedList.addToTail(2);
