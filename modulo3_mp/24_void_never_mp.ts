// Comparador de precios usando void y never

interface Producto {
    nombre: string;
    precio: number;
}

// Función que no devuelve ningún valor
function compararPrecios(producto1: Producto, producto2: Producto): void {

    console.log("===== COMPARADOR DE PRECIOS =====");
    console.log(`${producto1.nombre}: $${producto1.precio}`);
    console.log(`${producto2.nombre}: $${producto2.precio}`);

    if (producto1.precio < producto2.precio) {
        console.log("El producto más económico es: " + producto1.nombre);
    } else if (producto2.precio < producto1.precio) {
        console.log("El producto más económico es: " + producto2.nombre);
    } else {
        console.log("Ambos productos tienen el mismo precio.");
    }

}

// Función que nunca devuelve un valor
function errorProducto(mensaje: string): never {
    throw new Error(mensaje);
}

const laptop: Producto = {
    nombre: "Laptop",
    precio: 950
};

const monitor: Producto = {
    nombre: "Monitor",
    precio: 320
};

compararPrecios(laptop, monitor);

// Simular un error
// errorProducto("No se encontró el producto.");