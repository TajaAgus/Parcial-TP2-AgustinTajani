import ModelMem from "../model/DAO/numerosMem.js";

class Service {
    constructor() {
        this.model = new ModelMem();
    }

    saveNumero = async (numero) => {
        return await this.model.saveNumero(numero);
    };

    getNumeros = async () => {
        return {numeros: await this.model.getNumeros()};
    };

    getPromedio = async () => {
        const numeros = await this.model.getNumeros();
        let total = 0;
        numeros.forEach((e) => total += e);
        return {promedio: total / numeros.length};
    };

    getMinMax = async () => {
        const numeros = await this.model.getNumeros();
        return {min: Math.min(...numeros), max: Math.max(...numeros)}
    };

    getCantidad = async () => {
        const numeros = await this.model.getNumeros();
        return {cantidad: numeros.length};
    };
}

export default Service;
