// Comparador de precios usando while

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

// Suponemos que el primer producto es el más barato
let masBarato: Producto = productos[0];

let i = 0;

// Recorremos el arreglo con while
while (i < productos.length) {

    if (productos[i].precio < masBarato.precio) {
        masBarato = productos[i];
    }

    i++;
}

// Mostrar los productos
console.log("===== COMPARADOR DE PRECIOS =====");

i = 0;

while (i < productos.length) {
    console.log(productos[i].nombre + " - $" + productos[i].precio);
    i++;
}

console.log("---------------------------");
console.log("Producto más económico:");
console.log(masBarato.nombre + " - $" + masBarato.precio);