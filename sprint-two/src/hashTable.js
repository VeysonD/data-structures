

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //storage is a limited array
  //make a bucket that contains the k and v (tuple);
  //store the bucket at storage in the storage array at index (from line 9);
  //multiple tuples stored in a bucket produces a collision (maybe).  STOP THIS.
    //What is the difference between wanting to replace a value at a key and making a whole new key/value?
    //iterate over the entire storage and check every key at position === 0
      //check to see if the k === storage[i][0] //this case is to overwrite a key
        //then storage[i][1] = v;
    //else //want to do this outside the loop
      //make a new bucket
      //storage.set(bucket)
  var bucket;
  var storage = this._storage.get(index);
  if (!storage) {
    bucket = [[k, v]]
    this._storage.set(index, bucket);
  } else {
    bucket = [];
    var bucketExists = false
    for (var i = 0; i < storage.length; i += 1) {
      bucket.push(storage[i])
      if (storage[i][0] === k) {
        storage[i][1] = v;
        bucketExists = true;
      }
    }
    if (!bucketExists) {
      bucket.push([k, v]);
      this._storage.set(index, bucket);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);
  if (storage[0]) {
    var retrieveValue;
    for (var i = 0; i < storage.length; i += 1) {
      if (storage[i][0] === k) {
        retrieveValue = storage[i][1];
      }
    }
    return retrieveValue;
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);
  var removeAtIndex;
  for (var i = 0; i < storage.length; i += 1) {
    if (storage[i][0] === k) {
      removeAtIndex = i;
    }
  }
  storage[removeAtIndex] = undefined;;
};



/*
 * Complexity: What is the time complexity of the above functions?
 Insert is usually constant, but can be linear if unlucky.
 Retrieve is usually constant, but can be linear if unlucky.
 Remove is usually constant but cant be linear if unlucky.
 */
