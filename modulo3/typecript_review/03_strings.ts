// tipos-string.ts
const nombre3:    string = "Ana García";
const nombre4:    string = "Quito, 2026"
const saludo:    string = `Hola, ${nombre3}`;
const vacia:     string = "";
const comillas:  string = 'También con comillas simples';

console.log(nombre3);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre3.toUpperCase());      // ANA GARCÍA
console.log(nombre3.toLowerCase());      // ana garcía
console.log(nombre3.includes("García")); // true
console.log(nombre3.split(" "));         // ["Ana", "García"]
console.log(nombre4.split(" ,"));           // ['Quito, 2026]