const producto = 'Monitor 50 Pulgadas';
const precio = '30 USD';

console.log(producto.length); // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.
console.log(precio.length); //cuenta la cantidad de caracteres y muestra la cantidad
// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes
console.log(producto.includes('Monitor')); // VALIDAR SI UN TEXTO EXISTE DENTRO DE UNA VARIABLE 
console.log(producto.includes('monitor')); // Conocer si un texto existe


const saludo ="Hola Maria vas a ir a Hallowen";
console.log(saludo.length);
console.log(saludo.indexOf("Hallowen"));
console.log(saludo.includes("Navidad"));
console.log(saludo.includes("Hallowen"));


