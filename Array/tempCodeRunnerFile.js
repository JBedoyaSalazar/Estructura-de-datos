//Forma tradicional de crear un array
const frutas = ['manzana', 'pera', 'uva', 'sandia']

frutas.unshift('fresa')
// console.log(frutas)

//Construyendo Array De 0 con todos sus metodos
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    //Creando metodo de obtener
    get(index) {
        return this.data[index]
    }

    //Creando metodo de agregar
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    //Eliminacion de elementos
    pop() {
        const lastItem = this.data[this.length - 1] //regresando el elemento borrado para el usuario
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index)

        return item
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
    
    shift(){
        return this.delete(0)
    }//Elimina primer elemento

    unshift(item) {
        this.shiftToRight()
        this.data[0] = item
        return this.length
    }//Agrega primer elemento

    shiftToRight() {
        this.length++
        for (let i = this.length - 1; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
    }//Mueve todo el array hacia la derecha
}

const myArray = new MyArray()
myArray.unshift("!!!")
myArray.unshift("Platzinauta")
myArray.unshift("lograste")
myArray.unshift("lo")

console.log(myArray)




//Conclusion crear el index y el push es demasiado similar a manipular un array estatico en JAVA