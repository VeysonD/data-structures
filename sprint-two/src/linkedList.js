var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //console.log(count);
    var newNode = Node(value);
    //console.log(newNode);
    if (list.head === null) {
      list.head = newNode;
    } else {

      list.tail.next = newNode;
      //console.log(list);
    }
    list.tail = newNode;
    //console.log(list);
    console.log('done');

  };

  list.removeHead = function() {
    var head = list.head.value;
    list.head = list.tail;
    return head;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    if (list.tail.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addtoTail = constant
 removeHead = constant
 contains = linear
 */
