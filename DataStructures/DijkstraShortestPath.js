class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addNode(node){
        this.adjacencyList[node] = []
    }
    addEdge(node1,node2,weight){
        this.adjacencyList[node1].push({'node':node2,'weight':weight})
        this.adjacencyList[node2].push({'node':node1,'weight':weight})
    }
}
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}
function shortestPath(graph,start,finish) {
    const distances = {};
    const previous = {};
    let smallest;
    for(let vertex in graph.adjacencyList){
        if(vertex === start){
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0)
        } else{
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity)
        }
        previous[vertex] = null;
    }
    while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if(smallest === finish){
            while(previous[smallest]){
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
            path.push(start)
        }
        if(smallest || distances[smallest] !== Infinity){
            for(let neighbor in graph.adjacencyList[smallest]){
                let nextNode = graph.adjacencyList[smallest][neighbor];
                let candidate = distances[smallest]+nextNode.weight;
                let nextNeighbor = nextNode.node
                if(candidate < distances[nextNeighbor]){
                    distances[nextNeighbor] = candidate;
                    previous[nextNeighbor] = smallest;
                    nodes.enqueue(nextNeighbor,candidate)
                }
            }
        }
    }
    return path.reverse()
}
var graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.addEdge("A","B",4)
graph.addEdge("A","C",2)
graph.addEdge("B","E",3)
graph.addEdge("C","D",2)
graph.addEdge("C","F",4)
graph.addEdge("D","E",3)
graph.addEdge("D","F",1)
graph.addEdge("E","F",1)
console.log(shortestPath(graph,"A","E"))
