//Ejercicio esMayorEdad//
function esMayorEdad(edad) {
    let esMayor = false;
  
    if (edad >= 18) {
      esMayor = true;
    }
  
    return esMayor;
  }
  //Ejemplo//
  let edad = 20;
  let resultado = esMayorEdad(edad);
  console.log(resultado);
  
  edad = 15;
  resultado = esMayorEdad(edad);
  console.log(resultado); 
  
  //Ejercicio calculaAreaRectangulo//
  function calcularAreaRectangulo(base, altura) {
      let area = base * altura;
      return area;
    }
  //Ejemplo//
  let base = 5;
  let altura = 3;
  let areaRectangulo = calcularAreaRectangulo(base, altura);
  console.log("El área del rectángulo es:", areaRectangulo);
  
  //Ejercicio esPalindromo//
  function esPalindromo(cadena) {
      cadena = cadena.replace(/\s/g, '').toLowerCase();
      
      let longitud = cadena.length;
      let mitad = Math.floor(longitud / 2);
    
      for (let i = 0; i < mitad; i++) {
        if (cadena[i] !== cadena[longitud - 1 - i]) {
          return false;
        }
      }
    
      return true;
    }
  //Ejemplo//
  let palabra = "radar";
  console.log(esPalindromo(palabra));
  
  //Ejercicio generarNumeroAleatoreo//
    function generarNumeroAleatorio() {
      let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      return numeroAleatorio;
    }
  //Ejemplo//
    let numero = generarNumeroAleatorio();
    console.log(numero);