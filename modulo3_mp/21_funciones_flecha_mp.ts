// Comparador de precios usando funciones flecha

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

// Función flecha para mostrar productos
const mostrarProductos = (lista: Producto[]): void => {
    console.log("===== LISTA DE PRODUCTOS =====");

    lista.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
};

// Función flecha para obtener el producto más barato
const obtenerMasBarato = (lista: Producto[]): Producto => {

    let masBarato = lista[0];

    for (const producto of lista) {
        if (producto.precio < masBarato.precio) {
            masBarato = producto;
        }
    }

    return masBarato;
};

// Programa principal
mostrarProductos(productos);

const barato = obtenerMasBarato(productos);

console.log("----------------------------");
console.log("Producto más económico:");
console.log(`${barato.nombre} - $${barato.precio}`);