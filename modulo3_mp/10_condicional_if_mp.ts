// Comparador de precios usando if

let producto1: string = "Laptop";
let precio1: number = 950;

let producto2: string = "Monitor";
let precio2: number = 320;

console.log("===== COMPARADOR DE PRECIOS =====");
console.log(producto1 + ": $" + precio1);
console.log(producto2 + ": $" + precio2);

if (precio1 < precio2) {
    console.log("El producto más barato es: " + producto1);
} else if (precio2 < precio1) {
    console.log("El producto más barato es: " + producto2);
} else {
    console.log("Los dos productos tienen el mismo precio.");
}