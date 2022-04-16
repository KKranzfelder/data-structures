

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {

  var makeBucket = function (mySet, key, value) {
    var bucketItems;

    if (mySet.get(index) !== undefined) {
      bucketItems = mySet.get(index);
      var isOverwritten = false;

      for (var i = 0; i < bucketItems.length; i++) {
        if (key === bucketItems[i][0]) {
          bucketItems[i][1] = value;
          isOverwritten = true;
        }
      }

      if (!isOverwritten) {
        bucketItems.push([key, value]);
      }
    } else {
      bucketItems = [[key, value]];
    }

    return bucketItems;
  };

  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, makeBucket(this._storage, k, v));

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucketArr = this._storage.get(index);
  if (bucketArr.length === 1) {
    return bucketArr[0][1];
  } else {
    //check each array in bucket array
    for (var i = 0; i < bucketArr.length; i++) {
      //if k is equal to current array[0]
      if (k === bucketArr[i][0]) {
        return bucketArr[i][1];
        //return current array[1]
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


