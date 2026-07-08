// Comparador de precios usando bucles combinados

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

let masBarato: Producto = productos[0];

for (let i = 0; i < productos.length; i++) {

    let esMasBarato = true;

    for (let j = 0; j < productos.length; j++) {

        if (productos[j].precio < productos[i].precio) {
            esMasBarato = false;
            break;
        }

    }

    if (esMasBarato) {
        masBarato = productos[i];
    }

}

console.log("===== COMPARADOR DE PRECIOS =====");

for (let producto of productos) {
    console.log(`${producto.nombre} - $${producto.precio}`);
}

console.log("----------------------------");
console.log("Producto más económico:");
console.log(`${masBarato.nombre} - $${masBarato.precio}`);