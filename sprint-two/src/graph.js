

// Instantiate a new graph
var Graph = function() {
  //this.graphObj = {}
  this.nodeArray = [];
};

/*
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node3"]
};


*/
//


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var graphObj = new Graph();
  graphObj.nodeArray.push(node);
  console.log(graphObj)
  //this.graphObj.push(x.value);
  //console.log(this.graphObj);

  //console.log(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
