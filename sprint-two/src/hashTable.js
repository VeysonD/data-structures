

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //console.log(this);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._storage.get(index)

  if (holder === undefined) {
    var bucket = [k, v]
    this._storage.set(index, bucket);
  } else {
    holder[1] = v;
  }
  console.log('done');
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._storage.get(index);
  if (holder) {
    return holder[1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
