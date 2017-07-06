var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.objSize = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.objSize] = value;
  this.objSize += 1;

  return value;
};

stackMethods.pop = function() {
  var lastValue;
  if (this.objSize > 0) {
    this.objSize -= 1;
    lastValue = this.storage[this.objSize];
    delete this.storage[this.objSize];
  }
  return lastValue;
};

stackMethods.size = function() {
  return this.objSize;
};
