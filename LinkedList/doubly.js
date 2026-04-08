class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = new Node(value)

        this.tail = this.head

        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)

        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode

        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head //le asignamos el valor actual del head a la cadena
        this.head.prev = newNode

        this.head = newNode //remplazamos el valor de la cabeza
        this.length++

        return this
    }

    insert(value, index) {

        if (index < 0) {
            throw new Error("Index inválido")
        }

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
        const next = prev.next

        newNode.prev = prev
        newNode.next = next

        prev.next = newNode
        next.prev = newNode

        this.length++
        return this;
    }

    remove(index) {

        if (index < 0 || index >= this.length) {
            console.log(`Indice: ${index} inexistente, solamente tienes ${this.length - 1} indices.`)
            return
        }

        // Caso: lista de un solo nodo
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return this
        }

        // Caso: eliminar head
        if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
            this.length--
            return this
        }

        // Caso: eliminar tail
        if (index === this.length - 1) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
            return this
        }

        // Caso: nodo intermedio
        let current = this.head

        for (let i = 0; i < index; i++) {
            current = current.next
        }

        const nodeToRemove = current
        const prev = nodeToRemove.prev
        const next = nodeToRemove.next

        prev.next = next
        next.prev = prev

        this.length--
        return this
    }
}