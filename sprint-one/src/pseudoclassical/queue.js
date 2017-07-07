var Queue = function() {
  this.objSize = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.objSize] = value;
  this.objSize += 1;
  return value;
};


Queue.prototype.dequeue = function() {
  var removeFirst = this.storage[0];
  var shiftingIndex = 0;
  delete this.storage[0];
  if (this.objSize > 0) {
    if (this.storage[1]) {
      while (shiftingIndex !== this.objSize) {
        this.storage[shiftingIndex] = this.storage[shiftingIndex + 1];
        shiftingIndex += 1;
      }
      delete this.storage[shiftingIndex];
    }
    this.objSize -= 1;
  }
  return removeFirst;
};

Queue.prototype.size = function () {
  return this.objSize;
};
