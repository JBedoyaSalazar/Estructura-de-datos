class Node {
    constructor(value) {
        this.value = value
        this.prev = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value){
        const newNode = new Node(value)

        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
        }else{
            const holdingPointer = this.top
            this.top = newNode
            this.top.prev = holdingPointer
        }

        this.length++
        return this
    }

    pop(){

        if(this.length === 0){
            return null
        }else{
            this.top = this.top.prev
            this.length--
        }

        return this
    }

}

const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)

myStack.pop()
console.log(myStack.peek())