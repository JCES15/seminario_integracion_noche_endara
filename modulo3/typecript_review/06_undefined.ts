// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let nombre: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let nombre5: string | null = null;   // ✅ puede ser string o null

nombre5 = "Ana";
console.log(nombre);  // "Ana"
nombre5 = null;
console.log(nombre);  // null

// undefined — variable declarada pero sin valor
let ciudad3: string | undefined;
console.log(ciudad);  // undefined

ciudad3 = "Madrid";
console.log(ciudad);  // "Madrid"