let n1= 5;
let n2 = 10;

//operaciones basicas
let suma= n1+n2;
let resta = n1-n2;
let multi = n1*n2;
let divi = n1/n2;

//imprimir en consola
console.log("La suma de: " + n1 + " y " + n2 + " es igual a " + suma);//concatenar
console.log("La resta de: " + n1 + " y " + n2 + " es igual a " + resta);
console.log("La multplicación de: " + n1 + " y " + n2 + " es igual a " + multi);
console.log("La division de: " + n1 + " y " + n2 + " es igual a " + divi);

//template literales `${texto}`
console.log(`La suma de ${n1} mas ${n2} es igual a ${suma}`);
console.log(`La resta de ${n1} menos ${n2} es igual a ${resta}`);
console.log(`La multiplicacion de ${n1} por ${n2} es igual a ${multi}`);
console.log(`La division de ${n1} por ${n2} es igual a ${divi}`);


//alert imprimir en una ventana 
alert("Soy estudiante de programacion");


/* COMO INICIALIZAR MULTIPLES VARIABLES */

let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

console.log(categoria,marca,calificacion);//imprimir tres valiables juntaas
// También se puede inicializar una variable sin valor y asignarlo después

let disponible;
disponible = true; /* BOLEANO QUE PUEDE SER TRUE O FALSE */