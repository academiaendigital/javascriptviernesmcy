// Supongamos que creamos un carrito de compras desde la consola, 
// más adelante lo haremos ya desde una interfaz web.
const carrito = []; // nuesttro carrito es un array 

// Añadir un elemento al carrito...son objetos 
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);//un push es agregar una valor a nuestro arregl
carrito.push(producto2);


// Añadir al Inicio del carrito...

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);
console.log(carrito);

//Ejercicio  crear un bolso escolar con todos lo implementos necesarios