//Ejercicio Producto//
let producto = {
    nombre: 'Producto 1',
    precio: 10,
    cantidad: 2
  };
  
  function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
  }
  //Ejemplo//
  console.log(calcularTotal(producto));
  
  
  //Ejercicio Persona//
  let persona = {
    nombre: "Luna",
    edad: 30,
    profesion: "Ingeniera"
  };
  
  function presentarPersona(objetoPersona) {
    console.log("Nombre: " + objetoPersona.nombre);
    console.log("Edad: " + objetoPersona.edad);
    console.log("Profesión: " + objetoPersona.profesion);
  }
  
  //Ejemplo//
  presentarPersona(persona);
  
  
  //Ejercicio esMayorEdad//
  let esMayorEdad = {
  verificarEdad: function(persona) {
    if (persona.edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  };
  
  //Ejemplo//
  let persona1 = {
  nombre: "Juan",
  edad: 25
  };
  
  let persona2 = {
  nombre: "María",
  edad: 16
  };
  console.log(esMayorEdad.verificarEdad(persona1));
  console.log(esMayorEdad.verificarEdad(persona2));