// 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: {
                            value: null
                        }
                    }
                }
            }
        }
    }
}// Forma en la que se ve un linkedList

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class MySinglyLinkedList {

    constructor(value) {
        this.head = new Node(value)

        this.tail = this.head

        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode //Apunto al siguiente nodo
        this.tail = newNode//Dejo la cola con el valor
        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head //le asignamos el valor actual del head a la cadena
        this.head = newNode //remplazamos el valor de la cabeza
        this.length++

        return this
    }

    insert(value, index) {

        if (index >= this.length) {
            return this.append(value)
        }

        if (index === 0) {
            return this.prepend(value)
        }

        const newNode = new Node(value)
        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        const prev = current
        const next = current.next

        prev.next = newNode
        newNode.next = next

        this.length++
        return this;
    }

    remove(index) {

        // eliminar head
        if (index === 0) {
            this.head = this.head.next

            // si la lista queda vacía
            if (this.length === 1) {
                this.tail = null
            }

            this.length--
            return this
        }

        if (index < 0 || index >= this.length) {
            console.log(`Indice: ${index} inexistente, solamente tienes ${this.length - 1} indices.`)
            return
        }

        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        const prev = current
        const nodeToRemove = current.next
        const next = nodeToRemove.next

        if (index === this.length - 1) {
            prev.next = null
            this.tail = prev
        } else {
            prev.next = next
        }

        this.length--
        return this;
    }
}

const mySinglyLinkedList = new MySinglyLinkedList(1)