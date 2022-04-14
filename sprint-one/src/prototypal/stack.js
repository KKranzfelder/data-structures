var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var key = _.size(this.storage);
  this.storage[key] = value;
};

stackMethods.pop = function() {
  var result = this.storage[_.size(this.storage) - 1];
  delete this.storage[_.size(this.storage) - 1];
  return result;
};

stackMethods.size = function() {
  return _.size(this.storage);
};
