
class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    descripcion() {
        return `Este vehículo es un ${this.marca} ${this.modelo} del año ${this.año} de color ${this.color}.`;
    }

    arrancar() {
        return `El ${this.marca} ${this.modelo} ha arrancado.`;
    }

    detener() {
        return `El ${this.marca} ${this.modelo} se ha detenido.`;
    }
}


class Coche extends Vehiculo {
    constructor(marca, modelo, año, color, numPuertas) {
        super(marca, modelo, año, color);
        this.numPuertas = numPuertas;
    }

    tocarBocina() {
        return `El ${this.marca} ${this.modelo} está tocando la bocina.`;
    }
}


class Moto extends Vehiculo {
    constructor(marca, modelo, año, color, tipo) {
        super(marca, modelo, año, color);
        this.tipo = tipo;
    }

    calibrar() {
        return `Se está calibrando la ${this.marca} ${this.modelo}.`;
    }
}


let coche1 = new Coche('Toyota', 'Corolla', 2023, 'rojo', 4);
let coche2 = new Coche('Honda', 'Civic', 2022, 'azul', 5);

let moto1 = new Moto('Harley-Davidson', 'Sportster', 2021, 'negro', 'deportiva');
let moto2 = new Moto('Yamaha', 'YZF-R6', 2020, 'blanco', 'superbike');


console.log(coche1.descripcion());
console.log(coche1.arrancar());
console.log(coche1.tocarBocina());
console.log(coche2.descripcion());
console.log(coche2.detener());
console.log(moto1.descripcion());
console.log(moto1.calibrar());
console.log(moto2.arrancar());
