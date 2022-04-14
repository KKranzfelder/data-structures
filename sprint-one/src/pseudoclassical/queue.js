var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  var key = _.size(this.storage);
  while (this.storage[key] !== undefined) {
    key++;
  }
  this.storage[key] = value;
};

Queue.prototype.dequeue = function() {
  var first = _.first(Object.keys(this.storage));
  result = this.storage[first];
  delete this.storage[first];
  return result;
};

Queue.prototype.size = function() {
  return _.size(this.storage);
};