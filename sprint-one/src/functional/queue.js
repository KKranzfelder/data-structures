var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = Object.keys(storage).length;

    while (storage[key] !== undefined) {
      key++;
    }

    storage[key] = value;
  };

  someInstance.dequeue = function() {
    var first = _.first(Object.keys(storage));
    var result = storage[first];
    delete storage[first];
    return result;
  };

  someInstance.size = function() {
    return _.size(storage);
  };

  return someInstance;
};
