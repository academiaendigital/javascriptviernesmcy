/// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


// Aún no hemos visto las funciones

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo() );


const carrera = {
    nombre:"ingenieria en sistemas",
    profesor: "jose rodriguez",
    promocion: "xx",
    graduadosNext: function(){
        return `El padrino  de la promocion :${this.promocion}  de la carrera ${this.carrera}es el profesor ${this.profesor}`;
    } 
}
console.log(carrera.graduadosNext);