// Funciones que toman parametros y argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos


function saludar(nombre, apellido) { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre'); // Pablo y De la torre son argumentos, son los valores reales...

//saludar();

function sumar (n1,n2){
    console.log(`La suma de ${n1} mas ${n2} es igual= ${n1+n2}`);
}

sumar(15,25);
sumar(15,35);
sumar(15,85);