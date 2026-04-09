/**
 *           10
 *        4      20
 *      2   6   17  25
 */

class Node {
    constructor(value) {
        this.left = null
        this.rigth = null
        this.value = value
        this.count = 1
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                } else if (value === currentNode.value) {
                    currentNode.count++
                    return this
                }
            }
        }
    }

    search(value) {

        if (this.root === null) {
            return null
        }

        let currentNode = this.root

        while (currentNode) {

            if (value === currentNode.value) {
                return currentNode
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return null
    }

    delete(value) {
        if (this.root === null) return null;

        let currentNode = this.root;
        let parentNode = null;

        // 1. Buscar nodo y su padre
        while (currentNode && currentNode.value !== value) {
            parentNode = currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        // 2. No existe
        if (!currentNode) return null;

        // 3. Caso 1: sin hijos
        if (!currentNode.left && !currentNode.right) {
            if (parentNode.left === currentNode){
                parentNode.left = null
            } else{
                parentNode.right = null
            }

            return this
        }

        // 4. Caso 2: un hijo
        else if (!currentNode.left || !currentNode.right) {
            // 🔴 tú completas esto
        }

        // 5. Caso 3: dos hijos
        else {
            let successor = currentNode.right;
            let successorParent = currentNode;
        }

        return this;
    }//Falta por terminar
}