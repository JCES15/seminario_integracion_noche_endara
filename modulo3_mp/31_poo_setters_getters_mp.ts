// Clase Producto
class Producto {

    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Getter para obtener el nombre
    public get getNombre(): string {
        return this.nombre;
    }

    // Setter para modificar el nombre
    public set setNombre(nombre: string) {
        this.nombre = nombre;
    }

    // Getter para obtener el precio
    public get getPrecio(): number {
        return this.precio;
    }

    // Setter para modificar el precio
    public set setPrecio(precio: number) {

        if (precio >= 0) {
            this.precio = precio;
        } else {
            console.log("El precio no puede ser negativo");
        }
    }

    public mostrarProducto(): void {
        console.log(
            `Producto: ${this.nombre} - Precio: $${this.precio}`
        );
    }
}


// Clase Comparador de precios
class ComparadorPrecios {

    public comparar(producto1: Producto, producto2: Producto): void {

        if (producto1.getPrecio < producto2.getPrecio) {

            console.log(
                `El producto más barato es: ${producto1.getNombre}`
            );

        } 
        else if (producto2.getPrecio < producto1.getPrecio) {

            console.log(
                `El producto más barato es: ${producto2.getNombre}`
            );

        } 
        else {

            console.log("Los productos tienen el mismo precio");
        }
    }
}


// Programa principal

const producto1 = new Producto("Monitor LG", 250);
const producto2 = new Producto("Monitor Samsung", 300);


// Mostrar productos
producto1.mostrarProducto();
producto2.mostrarProducto();


// Cambiar precio usando Setter
producto1.setPrecio = 220;

console.log("\nDespués de actualizar precio:");

producto1.mostrarProducto();


// Comparar precios
const comparador = new ComparadorPrecios();

comparador.comparar(producto1, producto2);