//Adjacent List

const visualGraph = {
    0: [2],
    1: [2, 3],
    2: [0, 3, 1],
    3: [1, 2]
} //Usaremos este para el ejemplo

class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {}
    }

    addVertex(node) {
        this.adjacentList[node] = []
        this.nodes++
    }

    addEdge(node1, node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }
}

const myGraph = new Graph()