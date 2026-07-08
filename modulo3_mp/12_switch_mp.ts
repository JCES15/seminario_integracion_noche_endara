// Comparador de precios usando switch

let opcion: number = 3;

let producto: string = "";
let precio: number = 0;

switch (opcion) {

    case 1:
        producto = "Laptop";
        precio = 950;
        break;

    case 2:
        producto = "Monitor";
        precio = 320;
        break;

    case 3:
        producto = "Mouse";
        precio = 25;
        break;

    case 4:
        producto = "Teclado";
        precio = 45;
        break;

    default:
        console.log("Producto no disponible.");
        break;
}

console.log("Producto seleccionado: " + producto);
console.log("Precio: $" + precio);