class ModelMem {
    constructor() {
        this.numeros = [64, 128, 256]
    }

    saveNumero = async numero => {
        this.numeros.push(parseInt(numero))
        return numero
    }

    getNumeros = async () => (this.numeros)
}

export default ModelMem
