class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }//Ya existen estos hashMethod en github o la nube (No muy relevante)

    //Agregando valor en el HashTable
    set(key, value) {
        const address = this.hashMethod(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value]) //Si ya existe, manejamos el apilamiento de hash

        return this.data
    }

    //Obteniendo datos
    get(key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }

        return undefined
    }

    delete(key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]


        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    currentBucket.splice(i, 1)
                    console.log(`El elemento a borrar es: ${currentBucket[i][0]}`)
                    return true
                }
            }
        }

        return false
    }

    getAllElements() {
        const elements = []

        for (const bucket of this.data) {
            if (bucket) {
                for (const pair of bucket) {
                    elements.push(pair)
                }
            }
        }

        return elements
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('fresa', 5)