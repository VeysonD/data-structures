var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    count += 1;
    //console.log(count);
    storage[size] = value;
    size++;
    pushSize = size - 1
    //console.log(storage[pushSize]);
    //console.log(storage);
    return storage[pushSize]; //can refactor this by just returning value;
  };

  someInstance.pop = function() {
    console.log(count);
    //console.log(size);
    console.log(storage);
    count += 1;

    if (size > 0) {
      //console.log(size);
      size --;
      var popMe = storage[size];
      //console.log(storage);
      delete storage[size];
      //size--;
      //return storage[popSize];
      return popMe;
    } else {
      var popMe = storage[size]
      delete storage[size];
      return popMe;
    }
    //console.log(storage);
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
