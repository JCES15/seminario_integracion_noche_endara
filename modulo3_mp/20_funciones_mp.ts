// Comparador de precios usando funciones

interface Producto {
    nombre: string;
    precio: number;
}

// Función para mostrar los productos
function mostrarProductos(productos: Producto[]): void {
    console.log("===== LISTA DE PRODUCTOS =====");

    productos.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}

// Función para encontrar el producto más barato
function obtenerMasBarato(productos: Producto[]): Producto {

    let masBarato = productos[0];

    for (let producto of productos) {
        if (producto.precio < masBarato.precio) {
            masBarato = producto;
        }
    }

    return masBarato;
}

// Programa principal
const productos: Producto[] = [
    { nombre: "Laptop", precio: 950 },
    { nombre: "Monitor", precio: 320 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Impresora", precio: 180 }
];

mostrarProductos(productos);

const productoBarato = obtenerMasBarato(productos);

console.log("---------------------------");
console.log("Producto más económico:");
console.log(`${productoBarato.nombre} - $${productoBarato.precio}`);