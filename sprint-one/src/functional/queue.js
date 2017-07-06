var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size += 1;
    return value;
  };

  someInstance.dequeue = function() {
    var dequeueMe;
    var shiftingIndex = 0;
    if (size > 0) {
      dequeueMe = storage[0];
      delete storage[0];
      if (storage[1]) {
        while (shiftingIndex !== size) {
          storage[shiftingIndex] = storage[shiftingIndex + 1];
          shiftingIndex += 1;
        }
        delete storage[shiftingIndex - 1];
      }
      size -= 1;
    }
    return dequeueMe;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
