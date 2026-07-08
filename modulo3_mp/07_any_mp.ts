// Comparador de precios usando any

let precio1: any = 120;
let precio2: any = 95;

console.log("Precio 1: $" + precio1);
console.log("Precio 2: $" + precio2);

if (precio1 > precio2) {
    console.log("El precio más barato es: $" + precio2);
} else if (precio2 > precio1) {
    console.log("El precio más barato es: $" + precio1);
} else {
    console.log("Ambos productos tienen el mismo precio.");
}