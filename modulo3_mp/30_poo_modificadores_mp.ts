class Producto {

    // Modificador private: solo se puede acceder dentro de la clase
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Métodos public: permiten acceder a los datos privados
    public obtenerNombre(): string {
        return this.nombre;
    }

    public obtenerPrecio(): number {
        return this.precio;
    }

    public mostrarProducto(): void {
        console.log(
            `Producto: ${this.nombre} - Precio: $${this.precio}`
        );
    }
}


// Clase hija usando protected
class ProductoOferta extends Producto {

    protected descuento: number;

    constructor(nombre: string, precio: number, descuento: number) {
        super(nombre, precio);
        this.descuento = descuento;
    }

    public calcularPrecioOferta(): number {
        return this.obtenerPrecio() -
            (this.obtenerPrecio() * this.descuento / 100);
    }

    public mostrarOferta(): void {
        console.log(
            `Producto en oferta: ${this.obtenerName()}`
        );
    }

    private obtenerName(): string {
        return this.obtenerNombre();
    }
}


// Clase comparadora
class ComparadorPrecios {

    public comparar(producto1: Producto, producto2: Producto): void {

        console.log("\nComparación de precios:");

        if (producto1.obtenerPrecio() < producto2.obtenerPrecio()) {

            console.log(
                `${producto1.obtenerName()} es más barato`
            );

        } else if (producto2.obtenerPrecio() < producto1.obtenerPrecio()) {

            console.log(
                `${producto2.obtenerNombre()} es más barato`
            );

        } else {

            console.log("Los productos tienen el mismo precio");
        }
    }
}


// Programa principal

const productoA = new Producto("Laptop Lenovo", 900);
const productoB = new Producto("Laptop HP", 850);

productoA.mostrarProducto();
productoB.mostrarProducto();


const comparador = new ComparadorPrecios();

comparador.comparar(productoA, productoB);


// Producto con herencia y descuento

const oferta = new ProductoOferta("Tablet Samsung", 400, 20);

console.log(
    `Precio con descuento: $${oferta.calcularPrecioOferta()}`
);