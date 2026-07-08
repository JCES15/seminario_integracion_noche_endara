// Clase padre
class Producto {

    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public mostrarProducto(): void {
        console.log(
            `Producto: ${this.nombre} - Precio: $${this.precio}`
        );
    }

    public obtenerPrecio(): number {
        return this.precio;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }
}


// Clase hija: ProductoElectronico hereda de Producto
class ProductoElectronico extends Producto {

    private marca: string;

    constructor(nombre: string, precio: number, marca: string) {

        super(nombre, precio); // Llama al constructor de la clase padre
        this.marca = marca;
    }

    public mostrarProducto(): void {

        console.log(
            `Producto electrónico: ${this.nombre} - Marca: ${this.marca} - Precio: $${this.precio}`
        );
    }
}


// Clase hija: ProductoRopa hereda de Producto
class ProductoRopa extends Producto {

    private talla: string;

    constructor(nombre: string, precio: number, talla: string) {

        super(nombre, precio);
        this.talla = talla;
    }

    public mostrarProducto(): void {

        console.log(
            `Producto ropa: ${this.nombre} - Talla: ${this.talla} - Precio: $${this.precio}`
        );
    }
}


// Clase comparadora
class ComparadorPrecios {

    public comparar(producto1: Producto, producto2: Producto): void {

        console.log("\nComparando precios...");

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

            console.log("Ambos productos tienen el mismo precio");
        }
    }
}


// Programa principal

const laptop = new ProductoElectronico(
    "Laptop Lenovo",
    850,
    "Lenovo"
);

const camiseta = new ProductoRopa(
    "Camiseta deportiva",
    25,
    "M"
);


// Mostrar productos
laptop.mostrarProducto();
camiseta.mostrarProducto();


// Comparación
const comparador = new ComparadorPrecios();

comparador.comparar(laptop, camiseta);