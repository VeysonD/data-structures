var Stack = function() {
  this.objSize = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function(value) {
  this.storage[this.objSize] = value;
  this.objSize += 1;
  return value;
};

Stack.prototype.pop = function() {
  var removeLast;
  if (this.objSize > 0) {
    this.objSize -= 1;
    removeLast = this.storage[this.objSize];
    delete this.storage[this.objSize];
  }
  return removeLast;
};

Stack.prototype.size = function() {
  return this.objSize;
};
