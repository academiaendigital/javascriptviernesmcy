// El tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos

const boolean1 = true;
const boolean2 = false;



console.log(boolean1);
console.log(boolean2);


console.log(typeof boolean2);

//También un Boolean se puede crear con la palabra new

const boolean3 = new Boolean(true);
console.log(boolean3);
console.log(typeof boolean3);


// Existe otra forma de comparar si un valor es verdadero 
// y es por medio de algo llamado un operador ternario

const boolean5 = false;
const boolean6 = false;


if(boolean5) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log( boolean5  ? 'Si es true' : 'No no es true' )