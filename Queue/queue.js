class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enQueue(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
        return this
    }

    pop() {

        if (this.length === 0) {
            return null
        } else {
            this.first = this.first.next
            this.length--
        }

        return this
    }

}

const myQueue = new Queue()
myQueue.enQueue(1)
myQueue.enQueue(2)
myQueue.enQueue(3)
myQueue.enQueue(4)

myQueue.pop()
console.log(myQueue.peek())