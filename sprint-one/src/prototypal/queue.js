var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.objSize = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.objSize] = value;
  this.objSize += 1;
  return value;
};

queueMethods.dequeue = function() {
  var removeFirstItem = this.storage[0];
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
  return removeFirstItem;
};

queueMethods.size = function() {
  return this.objSize;
}
