// null-undefined.ts
// Online Typescript Editor for free
// Write, Edit and Run your Typescript code using TS Online Compiler

let nombre: string | null = null;   // ✅ puede ser string o null

nombre = "Precio";
console.log(nombre);  // "Ana"
nombre = null;
console.log(nombre);  // null

// undefined — variable declarada pero sin valor
let stock: string | undefined;
console.log(stock);  // undefined

stock = "Vacio";
console.log(stock);  "Lleno"