

// Instantiate a new graph
var Graph = function() {
  this.nodeObj = {};
};



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodes = this.nodeObj;
  nodes[node] = [node];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var nodes = this.nodeObj;
  return nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodes = this.nodeObj;
  if (nodes.hasOwnProperty(node)) {
    //delete edges on every single other node on this line before deleting the node
    for (var eachKey in nodes) {
      var fromNodeIndex = nodes[eachKey].indexOf(node);
      var toNodeIndex = nodes[node].indexOf(eachKey);
      if (fromNodeIndex && toNodeIndex) {
        nodes[node].splice(toNodeIndex, 1);
        nodes[eachKey].splice(fromNodeIndex, 1);
      }
    }
    delete nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var nodes = this.nodeObj;
  return nodes[fromNode].includes(toNode) && nodes[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodes = this.nodeObj;
  nodes[fromNode].push(toNode);
  nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodes = this.nodeObj;
  var fromNodeIndex = nodes[toNode].indexOf(fromNode);
  var toNodeIndex = nodes[fromNode].indexOf(toNode);
  if (fromNodeIndex && toNodeIndex) {
    nodes[fromNode].splice(toNodeIndex, 1);
    nodes[toNode].splice(fromNodeIndex, 1);
  } else {
    return undefined;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = this.nodeObj;
  for (var node in nodes) {
    cb(nodes[node][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode is constant
 contains is constant
 removeNode is usually linear
 hasEdge is constant
 addEdge is constant
 removeEdge is constant
 forEachNode is linear
 */
