var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
  var result = []
  if(this.value === target) {
    result.push(true);
  } else {
    result.push(false);
  }
  var treeArray = this.children;
  for (var i = 0; i < treeArray.length; i += 1) {
    result.push(treeArray[i].contains(target));
  }
 result = _.flatten(result);
 return _.some(result);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild = constant
 contains = linear
 */
