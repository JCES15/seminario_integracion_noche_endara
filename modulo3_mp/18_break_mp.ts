// Comparador de precios usando break

interface Producto {
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    { nombre: "Laptop", precio: 950 },
    { nombre: "Monitor", precio: 320 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Mouse", precio: 25 }
];

let buscar = "Teclado";

for (let i = 0; i < productos.length; i++) {

    if (productos[i].nombre === buscar) {

        console.log("Producto encontrado");
        console.log("Nombre: " + productos[i].nombre);
        console.log("Precio: $" + productos[i].precio);

        break; // Sale del ciclo cuando encuentra el producto
    }

}