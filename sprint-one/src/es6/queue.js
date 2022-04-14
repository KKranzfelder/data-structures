class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var key = _.size(this.storage);
    while (this.storage[key] !== undefined) {
      key++;
    }
    this.storage[key] = value;
  }

  dequeue() {
    var first = _.first(Object.keys(this.storage));
    var result = this.storage[first];
    delete this.storage[first];
    return result;
  }

  size() {
    return _.size(this.storage);
  }

}
