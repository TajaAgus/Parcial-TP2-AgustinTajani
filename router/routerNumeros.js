import express from 'express'
import Controller from '../controller/numeros.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start() {
        this.router.post('/entrada', this.controller.saveNumero)
        this.router.get('/entrada', this.controller.getNumeros)
        this.router.get('/promedio', this.controller.getPromedio)
        this.router.get('/cantidad', this.controller.getCantidad)
        this.router.get('/minmax', this.controller.getMinMax)
        return this.router
    }
}

export default Router