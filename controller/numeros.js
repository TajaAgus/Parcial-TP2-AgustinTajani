import Service from "../services/numeros.js";

class Controller {
    constructor() {
        this.service = new Service();
    }

    saveNumero = async (req, res) => {
        const numero = req.body.numero;

        // Saco esto para que la vista se recargue
        // const numeroGuardado = await this.service.saveNumero(numero);
        // res.json(numeroGuardado);
        
        await this.service.saveNumero(numero);
        res.redirect('/')
    };

    getNumeros = async (req, res) => {
        const numeros = await this.service.getNumeros();
        res.json(numeros);
    };

    getPromedio = async (req, res) => {
        const promedio = await this.service.getPromedio();
        res.json(promedio);
    };

    getCantidad = async (req, res) => {
        const cantNumeros = await this.service.getCantidad();
        res.json(cantNumeros);
    };

    getMinMax = async (req, res) => {
        const numero = await this.service.getMinMax();
        res.json(numero);
    };
}

export default Controller;
