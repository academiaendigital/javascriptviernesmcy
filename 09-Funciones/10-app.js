// arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

// Diferentes ejemplos de funciones flecha (arrow functions) en JavaScript

// 1. Función flecha con llaves {} - para múltiples líneas de código
// Cuando tienes más de una línea en el cuerpo de la función, necesitas llaves
const funcionConLlaves = () => {
    console.log('Aprendiendo JavaScript');
}

// 2. Función flecha sin llaves - para una sola línea de código
// Cuando el cuerpo tiene una sola línea, las llaves son opcionales
// y el valor se retorna implícitamente (si es una expresión)
const funcionUnaLinea = () => console.log('Aprendiendo JavaScript');

// 3. Función flecha que retorna un valor directamente
// En una sola línea sin llaves, el return es implícito
// Esto retorna la string 'Aprendiendo JavaScript'
const funcionConRetorno = () => 'Aprendiendo JavaScript';

// 4. Función flecha con parámetros
// Cuando tienes un solo parámetro, los paréntesis son opcionales
// Con múltiples parámetros, los paréntesis son obligatorios
const funcionConParametros = (tecnologia) => `Aprendiendo ${tecnologia}`;

// 5. Función flecha con múltiples parámetros (paréntesis obligatorios)
const funcionMultiplesParametros = (tecnologia, nivel) => {
    return `Aprendiendo ${tecnologia} - Nivel: ${nivel}`;
}

// Ejecutar las funciones para ver los resultados
console.log('--- Ejecutando funciones ---');

funcionConLlaves(); // Muestra: Aprendiendo JavaScript

funcionUnaLinea(); // Muestra: Aprendiendo JavaScript

// Esta función RETORNA un valor, así que necesitamos console.log para verlo
console.log(funcionConRetorno()); // Muestra: Aprendiendo JavaScript

console.log(funcionConParametros('JavaScript')); // Muestra: Aprendiendo JavaScript

console.log(funcionMultiplesParametros('React', 'Intermedio')); // Muestra: Aprendiendo React - Nivel: Intermedio

// Diferencia importante:
// - Con llaves {}: necesitas return explícito si quieres retornar un valor
// - Sin llaves: return implícito (automático)
