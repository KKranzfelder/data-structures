var BinarySearchTree = function(value) {
  var newBSTree = Object.create(binaryTreeMethods);
  newBSTree.tree = {};

  return newBSTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.left = function () {
  return this.tree.left;
};

binaryTreeMethods.right = function () {
  return this.tree.right;
};

binaryTreeMethods.insert = function (value) {
  if (Object.keys(this.tree).length === 0) {
    this.tree.value = value;
    return;
  }

  var adjust = function (curTree) {
    var insert = {'value': value};
    if (curTree.value > value) {
      if (curTree.left !== undefined && value < curTree.left.value) {
        adjust(curTree.left);
      } else if (curTree.left === undefined) {
        curTree.left = insert;
      } else {
        insert.left = curTree.left;
        curTree.left = insert;
      }
    }
    if (curTree.value < value) {
      if (curTree.right !== undefined && value > curTree.right.value) {
        adjust(curTree.right);
      } else if (curTree.right === undefined) {
        curTree.right = insert;
      } else {
        insert.right = curTree.right;
        curTree.right = insert;
      }
    }
  };

  adjust(this.tree);
  console.log(this.tree);
};

binaryTreeMethods.contains = function (value) {

};

binaryTreeMethods.depthFirstLog = function (cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
BSTree = {
    value: 8,
    left: {
        value: 2
    },
    right: {
        value: 10
        left: {
            value: 9
        },
        right: {
            value: 13
        }
    }
}

*/