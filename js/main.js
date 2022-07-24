// Variables
let nombre;
let precio;
let cantidad;
let continuar = false;

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularPrecioConIva() {
        return this.precio * 1.21 * this.cantidad;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
        this.total = 0;
    }

    agregarProducto(nombre, precio, cantidad) {
        const producto = new Producto(nombre, precio, cantidad);
        this.productos.push(producto);
    }

    calcularPrecioTotalConIva() {
        let total = 0;

        for(const producto of this.productos) {
            total += producto.calcularPrecioConIva();
        }
        
        // Actualizamos el valor del atributo
        this.total = total;
        return total;
    }
}

// Instanciando el objeto carrito
const carrito = new Carrito();

// Ciclo para pedir un precio por cada iteración y calcular total
do {
    nombre = prompt('Ingrese el nombre del producto (ingrese "FIN" para finalizar): ');
    precio = parseFloat(prompt('Ingrese el precio del producto (ingrese "FIN" para finalizar): '));
    cantidad = parseInt(prompt('Ingrese la cantidad del producto (ingrese "FIN" para finalizar): '));

    // Devuelve true o false
    continuar = prompt('Quiere continuar ingresando valores? (y/n):') === 'y';
      
    if (precio && cantidad) {
            carrito.agregarProducto(nombre, precio, cantidad);
    }

} while (continuar);

alert('El total a pagar es: ' + carrito.calcularPrecioTotalConIva());