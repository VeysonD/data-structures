var BinarySearchTree = function(value) {
  var treeObj = Object.create(binaryTreeMethods);
  treeObj.left = null;
  treeObj.right = null;
  treeObj.value = value;

  return treeObj;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (this.contains(value)) {
    return 'Invalid entry; no duplicate values allowed';
  }

  var currentNode = this;
  while (currentNode.value) {
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = BinarySearchTree(value);
        break;
      } else {
        currentNode = currentNode.left;
      }

    } else {
      if (!currentNode.right) {
        currentNode.right = BinarySearchTree(value);
        break;
      } else {
        currentNode = currentNode.right;
      }

    }
  }
}

binaryTreeMethods.contains = function(value) {
  var containsValue = false;
  var currentNode = this;

  while (currentNode !== null) {
    if (value === currentNode.value) {
      return true;
    } else {
      if (value < currentNode.value) {
        currentNode =  currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  return false;
}

binaryTreeMethods.depthFirstLog = function(callback) {
  var currentNode = this;
  var returnToThisNode;
  callback(currentNode.value);

  while (currentNode !== null) {
    if (currentNode.right && currentNode.left) {
      returnToThisNode = currentNode;
    } else if (currentNode.right && !currentNode.left) {
      callback(currentNode.right.value);
      if (returnToThisNode && currentNode.right === null) {
        currentNode = returnToThisNode;
      } else {
        currentNode = currentNode.right;
      }
    } else if (!currentNode.right && currentNode.left) {
      callback(currentNode.left.value);
      if (returnToThisNode && currentNode.left === null) {
        currentNode = returnToThisNode;
      }
      else {
        currentNode = currentNode.left;
      }
    } else {
      currentNode = null;
    }
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 Insert and contains starts at constant but can go up to logarithmic;
 depthFirstLog is linear
 */
