// Comparador de precios usando Rest Parameters

interface Producto {
    nombre: string;
    precio: number;
}

// Función con Rest Parameters
function compararPrecios(...productos: Producto[]): void {

    let masBarato = productos[0];

    for (let producto of productos) {
        if (producto.precio < masBarato.precio) {
            masBarato = producto;
        }
    }

    console.log("===== COMPARADOR DE PRECIOS =====");

    for (let producto of productos) {
        console.log(`${producto.nombre} - $${producto.precio}`);
    }

    console.log("----------------------------");
    console.log("Producto más económico:");
    console.log(`${masBarato.nombre} - $${masBarato.precio}`);
}

// Llamada a la función
compararPrecios(
    { nombre: "Laptop", precio: 950 },
    { nombre: "Monitor", precio: 320 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Impresora", precio: 180 }
);