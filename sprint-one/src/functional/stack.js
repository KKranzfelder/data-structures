var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key = _.size(storage);
    storage[key] = value;
  };

  someInstance.pop = function() {
    var result = storage[_.size(storage) - 1];
    delete storage[_.size(storage) - 1];
    return result;
  };

  someInstance.size = function() {
    return _.size(storage);
  };

  return someInstance;
};
