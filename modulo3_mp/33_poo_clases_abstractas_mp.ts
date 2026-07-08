
// Clase abstracta (no puede crear objetos directamente)
abstract class Producto {

    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método abstracto: las clases hijas deben implementarlo
    public abstract mostrarInformacion(): void;


    public obtenerPrecio(): number {
        return this.precio;
    }


    public obtenerNombre(): string {
        return this.nombre;
    }
}


// Clase hija de Producto
class ProductoElectronico extends Producto {

    private marca: string;

    constructor(nombre: string, precio: number, marca: string) {
        super(nombre, precio);
        this.marca = marca;
    }


    public mostrarInformacion(): void {

        console.log(
            `Electrónico: ${this.nombre} | Marca: ${this.marca} | Precio: $${this.precio}`
        );
    }
}


// Clase hija de Producto
class ProductoAlimento extends Producto {

    private fechaCaducidad: string;

    constructor(nombre: string, precio: number, fechaCaducidad: string) {
        super(nombre, precio);
        this.fechaCaducidad = fechaCaducidad;
    }


    public mostrarInformacion(): void {

        console.log(
            `Alimento: ${this.nombre} | Caduca: ${this.fechaCaducidad} | Precio: $${this.precio}`
        );
    }
}


// Clase comparadora
class ComparadorPrecios {


    public comparar(producto1: Producto, producto2: Producto): void {

        console.log("\nComparación de precios:");

        if (producto1.obtenerPrecio() < producto2.obtenerPrecio()) {

            console.log(
                `El producto más barato es: ${producto1.obtenerNombre()}`
            );

        } 
        else if (producto2.obtenerPrecio() < producto1.obtenerPrecio()) {

            console.log(
                `El producto más barato es: ${producto2.obtenerNombre()}`
            );

        } 
        else {

            console.log("Los productos tienen el mismo precio");
        }
    }
}


// Programa principal

const producto1 = new ProductoElectronico(
    "Celular Samsung",
    450,
    "Samsung"
);


const producto2 = new ProductoAlimento(
    "Café Premium",
    15,
    "2027-01-15"
);


// Mostrar información
producto1.mostrarInformacion();
producto2.mostrarInformacion();


// Comparar precios
const comparador = new ComparadorPrecios();

comparador.comparar(producto1, producto2);