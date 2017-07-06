var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.objSize = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
};

stackMethods.push = function(value) {
  this.objSize += 1;
  this.storage[this.objSize] = value;
};


stackMethods.pop = function() {
  var value = this.storage[this.objSize];
  delete this.storage[this.objSize];
  if (this.objSize > 0) {
    this.objSize -= 1;
  }
  return value
};

stackMethods.size = function() {
  return this.objSize;
};
