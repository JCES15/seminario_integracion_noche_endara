// Clase Producto
class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo(): string {
        return `${this.nombre} tiene un precio de $${this.precio}`;
    }
}


// Clase ComparadorPrecios
class ComparadorPrecios {

    comparar(producto1: Producto, producto2: Producto): string {

        if (producto1.precio < producto2.precio) {
            return `El producto más barato es: ${producto1.nombre} con un precio de $${producto1.precio}`;
        } 
        else if (producto2.precio < producto1.precio) {
            return `El producto más barato es: ${producto2.nombre} con un precio de $${producto2.precio}`;
        } 
        else {
            return "Los dos productos tienen el mismo precio";
        }
    }

    diferencia(producto1: Producto, producto2: Producto): number {
        return Math.abs(producto1.precio - producto2.precio);
    }
}


// Creación de objetos
const productoA = new Producto("Laptop Lenovo", 850);
const productoB = new Producto("Laptop HP", 780);


// Uso de la clase comparadora
const comparador = new ComparadorPrecios();

console.log(productoA.mostrarInfo());
console.log(productoB.mostrarInfo());

console.log(comparador.comparar(productoA, productoB));

console.log(
    `La diferencia de precio es: $${comparador.diferencia(productoA, productoB)}`
);