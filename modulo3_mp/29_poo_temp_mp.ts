// Clase Producto
class Producto {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public mostrarDatos(): string {
        return `${this.nombre} - Precio: $${this.precio}`;
    }
}


// Clase Temp para realizar la comparación
class Temp {

    public compararPrecios(producto1: Producto, producto2: Producto): void {

        console.log("Comparando precios...");

        if (producto1.getPrecio() < producto2.getPrecio()) {
            console.log(
                `El producto más económico es ${producto1.getNombre()} con $${producto1.getPrecio()}`
            );
        }
        else if (producto2.getPrecio() < producto1.getPrecio()) {
            console.log(
                `El producto más económico es ${producto2.getNombre()} con $${producto2.getPrecio()}`
            );
        }
        else {
            console.log("Ambos productos tienen el mismo precio");
        }
    }

    public calcularDiferencia(producto1: Producto, producto2: Producto): number {
        return Math.abs(producto1.getPrecio() - producto2.getPrecio());
    }
}


// Programa principal

const producto1 = new Producto("Celular Samsung", 350);
const producto2 = new Producto("Celular Xiaomi", 280);

const comparador = new Temp();

console.log(producto1.mostrarDatos());
console.log(producto2.mostrarDatos());

comparador.compararPrecios(producto1, producto2);

console.log(
    `Diferencia de precios: $${comparador.calcularDiferencia(producto1, producto2)}`
);