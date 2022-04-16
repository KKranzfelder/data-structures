

// Instantiate a new graph
var Graph = function() {
  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {};
  this.graph[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.graph) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode].edges.includes(this.graph[toNode])) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edges.push(this.graph[toNode]);
  this.graph[toNode].edges.push(this.graph[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdges = this.graph[fromNode].edges;
  var toNodeEdges = this.graph[toNode].edges;
  var fromNodeIndex = toNodeEdges.indexOf(this.graph[fromNode]);
  var toNodeIndex = fromNodeEdges.indexOf(this.graph[toNode]);

  fromNodeEdges.splice(toNodeIndex, 1);
  toNodeEdges.splice(fromNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graph, function(node, key) {
    cb(key);
  });
};
/*
 * Complexity: What is the time complexity of the above functions?

 */




/*
.addNode - constant time
.contains. - linear
.removeNode - constant time
.hasEdge - linear
.addEdge - constant time
.forEachNode -  linear time */
/*
graph = {
  1: { edges: [2, 3] },
  2: { edges: [] }
  3: { edges: [1] }
}


*/
