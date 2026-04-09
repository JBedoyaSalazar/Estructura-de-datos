//Representar Grafos Con Codigo


// Edge List

const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
]

// Adjacent List
//       0    1      2       3
const graph1 = [[2], [2, 3], [0, 3, 1], [1, 2]]


//Hash Table (Object)
const graph2 = {
    0: [2],
    1: [2, 3],
    2: [0, 3, 1],
    3: [1, 2]
} //Usaremos este para el ejemplo

// Adjacent Matrix

const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]// array de array

const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}