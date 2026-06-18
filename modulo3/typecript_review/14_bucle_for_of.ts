// for-of.ts

const nombres2: string[] = ["Ana", "Luis", "Marta", "Carlos"];
const precios: number[] = [100, 250, 75, 320, 50];

// TypeScript sabe que 'nombre' es string
for (const nombre of nombres2) {
  console.log(`Hola, ${nombre}!`);
  // nombre.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'precio' es number
let total: number = 0;
for (const precio of precios) {
  total += precio;
  // precio.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total: ${total}€`);

// Con índice usando entries()
for (const [indice, nombre] of nombres2.entries()) {
  console.log(`${indice + 1}. ${nombre}`);
}