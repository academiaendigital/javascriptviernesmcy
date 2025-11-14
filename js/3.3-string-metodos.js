// Repeat Te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);//concantenacion 
 


// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad);
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));


// .toUpperCase() te va a permitir cambiar un texto a todo mayusculas
const producto2 = 'Monitor 24 pulgadas ';
console.log(producto2.toUpperCase() );

// .toLowerCase() converti en minuscula un texto 
console.log(producto2.toLowerCase() );

// .toString() convertir en una cadena de caracteres un numero 
const cantidad = 200;
const cantidad2 = 400;
console.log(cantidad);
suma = cantidad+cantidad2;
console.log(suma);
console.log(`${cantidad}+${cantidad2}`);
console.log(cantidad+cantidad2);

