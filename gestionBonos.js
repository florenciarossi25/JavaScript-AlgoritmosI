class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }   
    calcularBono() {
        return this.salario * 0.1;
    }

    info() {
        return this.nombre + " -> Bono: $" + this.calcularBono();
    }
}

class Gerente extends Empleado {
    calcularBono() {
        return super.calcularBono() + (this.salario * 0.2);
    }
}


class Programador extends Empleado {
    extraBono = 50000;

    calcularBono() {
        return super.calcularBono() + this.extraBono;
    }
}

let empleado = new Empleado("Ana López", 400000)
let gerente = new Gerente("Carlos Pérez", 800000)
let programador = new Programador("Lucía Gómez", 600000)

const empleados = [empleado, gerente, programador];

for (const empleado of empleados) {
    console.log(empleado.info());
}