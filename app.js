class DispositivosEntrada {
    constructor (tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada (){
        return this._tipoEntrada;
    }
    set tipoEntrada (tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca (){
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
}

class Raton extends DispositivosEntrada{
    static contadorRatones = 0;

    constructor (tipoEntrada, marca){
        super (tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton (){
        return this._idRaton;
    }
    toString(){
        return `Raton ${this._idRaton}: Tipo de entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
}

let raton1 = new Raton('USB', 'Samsumg');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth', 'Dell');
console.log(raton2.toString());

class Teclado extends DispositivosEntrada{
    static contadorTeclados = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado (){
        return this._idTeclado;
    }
    toString(){
        return `Teclado ${this._idTeclado}: Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

let dispositivoEntrada1 = new DispositivosEntrada('Almacen', 'Lenovo');
console.log(dispositivoEntrada1);

let teclado1 = new Teclado('CABLE', 'DELL');
let teclado2 = new Teclado('BLUETOOTH', 'LENOVO');
console.log(teclado2.toString());

class Monitor {
    static contadorMonitor = 0;

    constructor (marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor () {
        return this._idMonitor;
    }
    toString(){
        return `Monitor ${this._idMonitor}: Marca: ${this._marca} Tamaño: ${this._tamano}`;
    }
}

let monitor1 = new Monitor('Samsumg', 25);
console.log(monitor1.toString());

let monitor2 = new Monitor('HP', 15);
console.log(monitor2.toString());

class Computadora {
    static contadorComputadora = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: \n ${this._nombre} \n Detalle: \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`
    }   

}

let computadora1 = new Computadora('PC Games', monitor1, teclado1, raton1);
let computadora2 = new Computadora('PC armada', monitor1, teclado2, raton2);

console.log(computadora1.toString());

class Orden {
    static contadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadora = [];
    }
    get idOrden (){
        return this._idOrden;
    }
    agregarComputadora (computadora){
        this._computadora.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';

        for (let computadora of this._computadora){
            computadorasOrden += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();