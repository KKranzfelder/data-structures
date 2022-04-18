var BinarySearchTree = function(value) {
  var newBSTree = Object.create(binaryTreeMethods);
  newBSTree.value = value;

  return newBSTree;
};

var binaryTreeMethods = {};

// binaryTreeMethods.left = function () {
//   return this.tree.right;
// };

// binaryTreeMethods.right = function () {
//   return this.tree.right;
// };

binaryTreeMethods.insert = function (value) {
  var adjust = function (curTree) {
    var insert = {};
    insert.value = value;

    if (value > curTree.value) {
      //if current tree has a right value and left value, recursively check right tree
      if (curTree.right !== undefined && curTree.left !== undefined) {
        adjust(curTree.right);
        //else if there's a right value and this would also be placed in the next right value,
        //but no left value is present. Rearrange value so current is now left, right would be
        //current level and the insert will be the right value
      } else if (curTree.right !== undefined && value > curTree.right.value) {
        //create new left tree node using current tree value
        curTree.left = {'value': curTree.value};
        //make current tree value equal the right tree value
        curTree.value = curTree.right.value;
        //reassign the right tree value to now equal the inserted value
        curTree.right.value = value;
        //else if right is present and this would be left, recursively check right tree
      } else if (curTree.right !== undefined && value < curTree.right.value) {
        adjust(curTree.right);
        // right is undefined and we can safely put insert value as right tree
      } else {
        curTree.right = insert;
      }
    }//same as above but mirrored for lesser than and left
    if (value < curTree.value) {
      if (curTree.left !== undefined && curTree.right !== undefined) {
        adjust(curTree.left);
      } else if (curTree.left !== undefined && value < curTree.left.value) {
        curTree.right = {'value': curTree.value};
        curTree.value = curTree.left.value;
        curTree.left.value = value;
      } else if (curTree.left !== undefined && value > curTree.left.value) {
        adjust(curTree.left);
      } else {
        curTree.left = insert;
      }
    }
  };

  adjust(this);
};

binaryTreeMethods.contains = function (value) {

  var hasValue = false;
  var climb = function(tree) {
    if (tree.value === value) {
      hasValue = true;
      return;
    }
    if (!hasValue && value < tree.value) {
      if (tree.left !== undefined) {
        climb(tree.left);
      }
    }
    if (!hasValue && value > tree.value) {
      if (tree.right !== undefined) {
        climb(tree.right);
      }
    }
  };

  climb(this);

  return hasValue;
};

binaryTreeMethods.depthFirstLog = function (cb) {

  var climb = function(tree) {

    cb(tree.value);

    if (tree.left !== undefined) {
      climb(tree.left);
    }
    if (tree.right !== undefined) {
      climb(tree.right);
    }
  };

  climb(this);
};

// var newTree = BinarySearchTree(5);
// newTree.insert(2);
// newTree.insert(3);
// newTree.insert(7);
// newTree.insert(6);
// console.table(newTree);
// console.log(newTree.left.right.value);//6
// console.log(newTree.right.left.value);//3

// var anotherNewTree = BinarySearchTree(5);
// anotherNewTree.insert(8);
// anotherNewTree.insert(9);
// anotherNewTree.insert(7);
// anotherNewTree.insert(6);
// console.table(anotherNewTree);

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



// var curLeft = curTree.left;
// var curRight = curTree.right;
// var insert = { 'value': value };
// if (value > curLeft.value && value < curTree.value) {
//   if (curLeft.right === undefined) {
//     curLeft.right = insert;
//   } else {
//     adjust(curLeft);
//   }
// } else if (value < curLeft.value) {
//   if (curLeft.left === undefined) {
//     curLeft.left = insert;
//   } else {
//     adjust(curLeft.left);
//   }
// } else if (value > curTree.value && value < curRight.value) {
//   if (curRight.left === undefined) {
//     curRight.left = insert;
//   } else {
//     adjust(curRight);
//   }
// } else if (value > curRight.value) {
//   if (curRight.right === undefined) {
//     curRight.right = insert;
//   } else {
//     adjust(curRight.right);
//   }
// }