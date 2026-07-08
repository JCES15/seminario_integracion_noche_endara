// Comparador de precios usando forEach

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

// Buscar el producto más barato
productos.forEach(producto => {
    if (producto.precio < masBarato.precio) {
        masBarato = producto;
    }
});

// Mostrar los productos
console.log("===== LISTA DE PRODUCTOS =====");

productos.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio}`);
});

console.log("----------------------------");
console.log("Producto más económico:");
console.log(`${masBarato.nombre} - $${masBarato.precio}`);