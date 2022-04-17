var BinarySearchTree = function(value) {
  var newBSTree = Object.create(binaryTreeMethods);
  newBSTree.tree = {
    'value': value
  };

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

  var adjust = function (curTree) {
    // var insert = {'value': value};
    // if (curTree.value < value) {
    //   if (curTree.right !== undefined) {
    //     adjust(curTree.right);
    //   } else if (curTree.right === undefined) {
    //     curTree.right = insert;
    //   } else {
    //     insert.right = curTree.right;
    //     curTree.right = insert;
    //   }
    // }
    // if (curTree.value > value) {
    //   if (curTree.left !== undefined) {
    //     adjust(curTree.left);
    //   } else if (curTree.left === undefined) {
    //     curTree.left = insert;
    //   } else {
    //     insert.left = curTree.left;
    //     curTree.left = insert;
    //   }
    // }
    var curLeft = curTree.left;
    var curRight = curTree.right;
    var insert = { 'value': value };
    if (value > curLeft.value && value < curTree.value) {
      if (curLeft.right === undefined) {
        curLeft.right = insert;
      } else {
        adjust(curLeft);
      }
    } else if (value < curLeft.value) {
      if (curLeft.left === undefined) {
        curLeft.left = insert;
      } else {
        adjust(curLeft.left);
      }
    } else if (value > curTree.value && value < curRight.value) {
      if (curRight.left === undefined) {
        curRight.left = insert;
      } else {
        adjust(curRight);
      }
    } else if (value > curRight.value) {
      if (curRight.right === undefined) {
        curRight.right = insert;
      } else {
        adjust(curRight.right);
      }
    }
  };

  adjust(this.tree);
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


/*

binaryTreeMethods.insert = function (value) {

  var adjust = function (curTree) {
    var insert = {'value': value};
    if (curTree.value > value) {
      if (curTree.left !== undefined) {
        if (value < curTree.left.value) {
          adjust(curTree.left);
        } else {
          if (curTree.right !== undefined) {
            adust(curTree.right);
          } else {
            curTree.right = insert;
          }
        }
      } else if (value > curTree.left && curTree.right === undefined) {
        curTree.right = insert;
      } else if (curTree.left === undefined) {
        curTree.left = insert;
      } else {
        insert.left = curTree.left;
        curTree.left = insert;
      }
    }
    if (curTree.value < value) {
      if (curTree.right !== undefined) {
        if (value > curTree.right.value) {
          adjust(curTree.right);
        } else {
          if (curTree.left !== undefined) {
            adjust(curTree.left);
          } else {
            curTree.left = insert;
          }
        }
      } else if (value < curTree.right && curTree.left === undefined) {
        curTree.left = insert;
      } else if (curTree.right === undefined) {
        curTree.right = insert;
      } else {
        insert.right = curTree.right;
        curTree.right = insert;
      }
    }
  };

  adjust(this.tree);
  console.table(this.tree);
};





if value is between currentValue and left value
  if currentValue.left is undefined
    make value the new right of currentValue.left
  else
    call adjust on current tree
if value is less than currentValue.left’s value
  if currentValue.left.left is undefined
    make value the new left value of currentValue.left
  else
    call adjust on current tree


if value is between currentValue and right value
  if currentValue.left is undefined
    make value the new left of currentValue.right
  else
    call adjust on current tree
if value is greater than currentValue.right
  if currentValue.left.left is undefined
    make value the new right value of currentValue.right
  else
    call adjust on current tree

*/
