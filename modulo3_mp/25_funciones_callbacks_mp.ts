// Comparador de precios usando Callback

interface Producto {
    nombre: string;
    precio: number;
}

// Función que recibe dos productos y un callback
function compararPrecios(
    producto1: Producto,
    producto2: Producto,
    callback: (resultado: string) => void
): void {

    let resultado: string;

    if (producto1.precio < producto2.precio) {
        resultado = `El producto más económico es ${producto1.nombre} ($${producto1.precio})`;
    } else if (producto2.precio < producto1.precio) {
        resultado = `El producto más económico es ${producto2.nombre} ($${producto2.precio})`;
    } else {
        resultado = "Ambos productos tienen el mismo precio.";
    }

    // Ejecutar el callback
    callback(resultado);
}

const laptop: Producto = {
    nombre: "Laptop",
    precio: 950
};

const monitor: Producto = {
    nombre: "Monitor",
    precio: 320
};

// Llamar a la función con un callback
compararPrecios(laptop, monitor, function(resultado) {
    console.log("===== COMPARADOR DE PRECIOS =====");
    console.log(resultado);
});