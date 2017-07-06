var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.objSize = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.objSize] = value;
  //someInstance.index += 1;
  this.objSize += 1;
  return value;
}

queueMethods.dequeue = function () {
  var dequeueMe;
  var shiftingIndex = 0;
  if (this.objSize > 0) {
    dequeueMe = this.storage[0];
    delete this.storage[0];
    if (this.storage[1]) {
      while (shiftingIndex !== this.objSize) {
        this.storage[shiftingIndex] = this.storage[shiftingIndex + 1];
        shiftingIndex += 1;
      }
      delete this.storage[shiftingIndex];
    }
    this.objSize -= 1;
  }
  return dequeueMe;
}

queueMethods.size = function () {
  return this.objSize;
}
