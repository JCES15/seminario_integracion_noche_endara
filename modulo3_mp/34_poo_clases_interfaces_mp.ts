
// Interfaz que define la estructura del producto
interface IProducto {

    nombre: string;
    precio: number;

    mostrarInformacion(): void;
    obtenerPrecio(): number;
}


// Clase Producto que implementa la interfaz
class Producto implements IProducto {

    public nombre: string;
    public precio: number;


    constructor(nombre: string, precio: number) {

        this.nombre = nombre;
        this.precio = precio;
    }


    public mostrarInformacion(): void {

        console.log(
            `Producto: ${this.nombre} - Precio: $${this.precio}`
        );
    }


    public obtenerPrecio(): number {

        return this.precio;
    }
}


// Clase hija usando herencia e interfaz
class ProductoElectronico extends Producto {

    private marca: string;


    constructor(nombre: string, precio: number, marca: string) {

        super(nombre, precio);
        this.marca = marca;
    }


    public mostrarInformacion(): void {

        console.log(
            `Producto electrónico: ${this.nombre} - Marca: ${this.marca} - Precio: $${this.precio}`
        );
    }
}


// Clase comparadora
class ComparadorPrecios {


    public comparar(producto1: IProducto, producto2: IProducto): void {


        console.log("\nComparando precios...");


        if (producto1.obtenerPrecio() < producto2.obtenerPrecio()) {

            console.log(
                `El producto más económico es: ${producto1.nombre}`
            );

        } 
        else if (producto2.obtenerPrecio() < producto1.obtenerPrecio()) {

            console.log(
                `El producto más económico es: ${producto2.nombre}`
            );

        } 
        else {

            console.log("Los productos tienen el mismo precio");
        }
    }
}


// Programa principal

const productoA = new Producto(
    "Teclado Gamer",
    50
);


const productoB = new ProductoElectronico(
    "Mouse Gamer",
    35,
    "Logitech"
);


// Mostrar información
productoA.mostrarInformacion();
productoB.mostrarInformacion();


// Comparar precios
const comparador = new ComparadorPrecios();

comparador.comparar(productoA, productoB);