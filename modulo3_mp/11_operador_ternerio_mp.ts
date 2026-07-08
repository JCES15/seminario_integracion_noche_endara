let precio1: number = 120;
let precio2: number = 95;

let resultado: string =
    precio1 < precio2
        ? `El precio más barato es $${precio1}`
        : precio2 < precio1
        ? `El precio más barato es $${precio2}`
        : "Ambos precios son iguales";

console.log(resultado);