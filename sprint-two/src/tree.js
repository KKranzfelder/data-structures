var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var hasValue = false;
  var climb = function (tree) {
    if (tree.value === target) {
      hasValue = true;
    } else {
      if (tree.children.length !== 0) {
        tree.children.forEach(function(child) {
          if (!hasValue) {
            hasValue = child.contains(target);
          }
        });
      }
    }
  };

  climb(this);

  return hasValue;
};


/*
 * Complexity: What is the time complexity of the above functions?
addChild = constant time (0)1
contains = linear (0)N
 */
