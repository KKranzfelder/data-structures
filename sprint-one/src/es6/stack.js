class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(value) {
    var key = _.size(this.storage);
    this.storage[key] = value;
  }

  pop() {
    var result = this.storage[_.size(this.storage) - 1];
    delete this.storage[_.size(this.storage) - 1];
    return result;
  }

  size() {
    return _.size(this.storage);
  }

}