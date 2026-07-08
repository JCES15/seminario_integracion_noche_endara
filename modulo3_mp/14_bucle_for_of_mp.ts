// Comparador de precios usando for...of

interface Producto {
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    { nombre: "Laptop", precio: 950 },
    { nombre: "Monitor", precio: 320 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Impresora", precio: 180 }
];

// Suponemos que el primero es el más barato
let masBarato: Producto = productos[0];

// Recorremos el arreglo
for (const producto of productos) {

    if (producto.precio < masBarato.precio) {
        masBarato = producto;
    }

}

console.log("===== COMPARADOR DE PRECIOS =====");

for (const producto of productos) {
    console.log(`${producto.nombre} - $${producto.precio}`);
}

console.log("---------------------------");
console.log("Producto más económico:");
console.log(`${masBarato.nombre} - $${masBarato.precio}`);