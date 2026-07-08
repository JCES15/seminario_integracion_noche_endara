// Comparador de precios usando for...in

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

// Recorremos los índices del arreglo
for (let indice in productos) {

    if (productos[indice].precio < masBarato.precio) {
        masBarato = productos[indice];
    }

}

console.log("===== COMPARADOR DE PRECIOS =====");

for (let indice in productos) {
    console.log(productos[indice].nombre + " - $" + productos[indice].precio);
}

console.log("-----------------------------");
console.log("Producto más económico:");
console.log(masBarato.nombre + " - $" + masBarato.precio);