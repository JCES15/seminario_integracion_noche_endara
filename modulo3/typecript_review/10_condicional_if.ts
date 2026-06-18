// condicionales.ts

const temperatura1: number = 25;

if (temperatura1 > 35) {
  console.log("Hace mucho calor");
} else if (temperatura1 > 20) {
  console.log("temperatura1 agradable");   // ← este se ejecuta
} else if (temperatura1 > 10) {
  console.log("Fresco");
} else {
  console.log("Hace frío");
}

// Con boolean
const esMayorDeEdad: boolean = true;

if (esMayorDeEdad) {
  console.log("Puede entrar");
} else {
  console.log("No puede entrar");
}

// Con string
const rol: string = "admin";

if (rol === "admin") {
  console.log("Acceso total");
} else if (rol === "editor") {
  console.log("Puede editar");
} else {
  console.log("Solo lectura");
}