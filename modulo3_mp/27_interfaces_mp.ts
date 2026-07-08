// Comparador de precios usando Type

// Definición del tipo Producto
type Producto = {
    nombre: string;
    precio: number;
};

// Productos
const producto1: Producto = {
    nombre: "Laptop",
    precio: 888
};

const producto2: Producto = {
    nombre: "Monitor",
    precio: 555
};

// Comparación
console.log("===== COMPARADOR DE PRECIOS =====");
console.log(`${producto1.nombre}: $${producto1.precio}`);
console.log(`${producto2.nombre}: $${producto2.precio}`);

if (producto1.precio < producto2.precio) {
    console.log(`El producto más económico es: ${producto1.nombre}`);
} else if (producto2.precio < producto1.precio) {
    console.log(`El producto más económico es: ${producto2.nombre}`);
} else {
    console.log("Ambos productos tienen el mismo precio.");
}