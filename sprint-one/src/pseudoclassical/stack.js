var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var key = _.size(this.storage);
  this.storage[key] = value;
};

Stack.prototype.pop = function() {
  var result = this.storage[_.size(this.storage) - 1];
  delete this.storage[_.size(this.storage) - 1];
  return result;
};

Stack.prototype.size = function() {
  return _.size(this.storage);
};

