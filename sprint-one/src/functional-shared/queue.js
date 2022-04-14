var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  var storage = this.storage;
  var key = Object.keys(storage).length;

  while (storage[key] !== undefined) {
    key++;
  }
  storage[key] = value;
};

queueMethods.dequeue = function () {
  var first = _.first(Object.keys(this.storage));
  var result = this.storage[first];
  delete this.storage[first];
  return result;
};

queueMethods.size = function() {
  return _.size(this.storage);
};



