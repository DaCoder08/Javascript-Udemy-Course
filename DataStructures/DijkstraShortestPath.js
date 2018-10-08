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
    const nodes = new PriorityQueue();
    let path = []
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
    return path.concat(smallest).reverse()
}
function run(graph,start,finish) {
	graph.addNode("A")
	graph.addNode("B")
	graph.addNode("C")
	graph.addNode("D")
	graph.addNode("E")
	graph.addNode("F")
	graph.addNode("G")
	graph.addNode("H")
	graph.addEdge("A","C",4)
	graph.addEdge("A","F",7)
	graph.addEdge("C","D",3)
	graph.addEdge("C","G",9)
	graph.addEdge("C","F",2)
	graph.addEdge("F","G",8)
	graph.addEdge("G","D",7)
	graph.addEdge("G","E",2)
	graph.addEdge("G","H",3)
	graph.addEdge("D","E",3)
	graph.addEdge("E","H",7)
	graph.addEdge("E","B",9)
	graph.addEdge("H","B",3)
	return shortestPath(graph,start,finish)
}
var graph = new Graph()
start = "A"
finish = "B"
console.log(run(graph,start,finish))

