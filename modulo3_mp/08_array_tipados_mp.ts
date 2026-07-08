// Definición del tipo Producto
interface Producto {
    nombre: string;
    precio: number;
}

// Array tipado
const productos: Producto[] = [
    { nombre: "Laptop", precio: 950 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 280 },
    { nombre: "Impresora", precio: 180 }
];

// Buscar el producto más barato
let barato: Producto = productos[0];

for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio < barato.precio) {
        barato = productos[i];
    }
}

// Mostrar todos los productos
console.log("====== COMPARADOR DE PRECIOS ======\n");

productos.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio}`);
});

console.log("\nProducto más económico:");
console.log(`${barato.nombre} - $${barato.precio}`);