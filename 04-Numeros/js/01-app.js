
// Una nota muy importante es que en la consola los números se muestran de diferente color 
// cuando es número que cuando es un string que representa un número

const numero6 = 20;
const numero7 = "20";
console.log(numero6);
console.log(numero7);
// Crear Números

const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .10213;
const numero5 = -3;

// Otra forma de crear número 

const numero8 = new Number(20);
console.log(numero8);


// Suma
resultado = numero1 + numero2;
console.log(resultado);
// Resta
resultado = numero1 - numero2;
console.log(resultado);
// Mult
resultado = numero1 * numero2;
console.log(resultado);
// Division
resultado = numero1 / numero2;
console.log(resultado);
// Modulo
resultado = numero1 % numero2;
console.log(resultado);


// Math es parte de la ventana global de JavaScript,
//  tiene una serie de operaciones que pueden ser muy útiles y algunas 
// actuan de forma algo extraña, asi que vamos a verlas.

let resultado; 

// Pi
resultado = Math.PI;
console.log(resultado);

// redondeo
resultado = Math.round(2.5);
console.log(resultado);

// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
console.log(resultado);

// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// Abssoluto
resultado = Math.abs(-300);
console.log(resultado);
// Potencia
resultado = Math.pow(8, 3);
console.log(resultado);
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
console.log(resultado);
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
console.log(resultado);
// Aleatorio
resultado = Math.random();
console.log(resultado);
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );
console.log(resultado);

