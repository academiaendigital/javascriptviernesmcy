// Object constructor...

// Object Constructor
function Producto(nombre, precio, categoria) {
    // Propiedades
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    
    // Métodos
    this.mostrarInfo = function() {
        return `${this.nombre} - $${this.precio} (${this.categoria})`;
    };
    
    this.aplicarDescuento = function(porcentaje) {
        this.precio = this.precio * (1 - porcentaje / 100);
        return this.precio;
    };
}


//como usar un objeto constructor
// Crear instancias (objetos)
const producto1 = new Producto("Laptop", 1000, "Tecnología");
const producto2 = new Producto("Mouse", 25, "Accesorios");

// Usar los métodos
console.log(producto1.mostrarInfo()); // "Laptop - $1000 (Tecnología)"
console.log(producto2.mostrarInfo()); // "Mouse - $25 (Accesorios)"

// Aplicar descuento
producto1.aplicarDescuento(10);
console.log(producto1.mostrarInfo()); // "Laptop - $900 (Tecnología)"


// de forma mas eficiente 
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.vendido = false;
    
    this.vender = function(cantidad = 1) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            this.vendido = true;
            return `Vendido: ${cantidad} ${this.nombre}`;
        } else {
            return `Stock insuficiente. Disponible: ${this.stock}`;
        }
    };
    
    this.reabastecer = function(cantidad) {
        this.stock += cantidad;
        return `Stock actualizado: ${this.stock}`;
    };
}

// Usar el constructor
const inventario = [
    new Producto("Camisa", 30, 10),
    new Producto("Pantalón", 50, 5),
    new Producto("Zapatos", 80, 3)
];

// Probar los métodos
console.log(inventario[0].vender(2)); // "Vendido: 2 Camisa"
console.log(inventario[1].reabastecer(5)); // "Stock actualizado: 10"