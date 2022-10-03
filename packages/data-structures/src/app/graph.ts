class Graph {
  adjacencyList: Record<string, string[]>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex: string) {
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  dfs(start: string) {
    const result = [];
    const visited = {};
    const adjList = this.adjacencyList;

    function helper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return helper(neighbor);
      });
    }

    helper(start);

    return result;
  }
}

const graph = new Graph();
graph.addVertex('tokyo');
graph.addVertex('boston');
graph.addVertex('dallas');
graph.addVertex('hong kong');
graph.addVertex('cairo');

graph.addEdge('tokyo', 'boston');
graph.addEdge('tokyo', 'hong kong');
graph.addEdge('hong kong', 'cairo');
graph.addEdge('boston', 'cairo');
graph.addEdge('boston', 'dallas');
graph.addEdge('dallas', 'cairo');

// graph.removeEdge('dallas', 'cairo');

console.log(graph.dfs('tokyo'));
