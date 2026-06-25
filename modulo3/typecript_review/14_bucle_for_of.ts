// for-of.ts

const nombres2: string[] = ["Ana", "Luis", "Marta", "Carlos"];
const precios: number[] = [100, 250, 75, 320, 50];

// TypeScript sabe que 'nombre' es string
for (const nombre of nombres2) {
  console.log(`Hola, ${nombre}!`);
  // nombre.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'precio' es number
let stotal15: number = 0;
for (const precio of precios) {
  stotal15 += precio;
  // precio.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`stotal15: ${stotal15}€`);

// Con índice usando entries()
for (const [indice, nombre] of nombres2.entries()) {
  console.log(`${indice + 1}. ${nombre}`);
}

interface Item {
  nombre: string;
  precio: number;
  cantidad: number;
}

const carrito: Item[] = [
  { nombre: "Mouse",   precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 80, cantidad: 1 },
  { nombre: "Monitor", precio: 200, cantidad: 3 },
];

let totalCarrito = 0;
for (const item of carrito) {
  const substotal15 = item.precio * item.cantidad;
  console.log(`${item.nombre}: $${substotal15}`);
  stotal15 += substotal15;
}
console.log(`stotal15: $${stotal15}`);  // stotal15: $730