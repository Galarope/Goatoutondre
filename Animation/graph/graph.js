import MinPriorityQueue from "./minPriorityQueue.js";
class Graph {
    nodes = {};

    addNode(name) {
        this.nodes[name] = new Node(name);
    }

    addEdge(from, to, weight) {
        let fromNode = this.nodes[from];
        let toNode = this.nodes[to];
        if (!fromNode || !toNode) return;

        fromNode.addEdge(toNode, Math.abs(weight));
        //toNode.addEdge(fromNode, weight);  /** */
    }

    findShortestPath(from, to) {
      const fromNode = this.nodes[from];
      const toNode = this.nodes[to];
      if (!fromNode || !toNode) return [];

      // Number.MAX_SAFE_INTEGER
        const distances = {};
        
        for (let node in this.nodes) 
            distances[node] = Number.MAX_SAFE_INTEGER;    
        
        distances[fromNode.name] = 0;
        
        const prevNodes = {};
        const visited = new Set();
        const queue = new MinPriorityQueue();
        queue.push(new NodeEntry(fromNode, 0));

        while (!queue.isEmpty()) {
            let current = queue.pop().node;
            visited.add(current);

            for (let edge of current.edges) {
                if (visited.has(edge.toNode))
                    continue;
                
                let newDistance = distances[current.name] + edge.weight;
                if (newDistance < distances[edge.toNode.name]) {
                    distances[edge.toNode.name] = newDistance;
                    prevNodes[edge.toNode.name] = current.name;
                    queue.push(new NodeEntry(edge.toNode, newDistance));
                }
            }
        }

        return this.buildPath(prevNodes, to);
    }

    buildPath(prevNodes, toNode) {
        let reversed = [];
        let path = [];
        let current = toNode;

        while (current != null) {
            reversed = [...reversed, current];
            current = prevNodes[current];
        }

        for (let i = reversed.length - 1; i >= 0; i--) 
            path[reversed.length - (i + 1)] = reversed[i];
        
        path.shift();
        return path;
    }

    getNodes() {
        return this.nodes;
    }

}
class Node {
    name;
    edges = [];
    constructor(name) {
        this.name = name;
    }
    
    addEdge(toNode, weight) {
        this.edges.push(new Edge(this, toNode, weight));
    }

    getEdges() {
        return this.edges;
    }

}

class Edge {
    constructor(fromNode, toNode, weight) {
        this.fromNode = fromNode;
        this.toNode = toNode;
        this.weight = weight;
    }
}

class NodeEntry {
    constructor(node, priority) {
        this.node = node;
        this.priority = priority;
    }
}

export default Graph;