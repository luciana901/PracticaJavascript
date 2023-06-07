//Ejercicio 1//
let numeros = prompt("Ingresa un número:");

if (numeros > 0) {
  console.log("El número es positivo");
} else if (numeros < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

//Ejercicio 2//
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  let numero = parseInt(prompt("Ingrese un número:"));
  
  if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
  } else {
    console.log(numero + " no es un número primo.");
  }

//Ejercicio 3//
let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let unidad = prompt("Ingrese la unidad de temperatura (Celsius o Fahrenheit):").toLowerCase();

if (unidad === "celsius") {
  let fahrenheit = (temperatura * 9 / 5) + 32;
  console.log(`${temperatura} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
} else if (unidad === "fahrenheit") {
  let celsius = (temperatura - 32) * 5 / 9;
  console.log(`${temperatura} grados Fahrenheit son ${celsius} grados Celsius.`);
} else {
  console.log("Unidad de temperatura inválida.");
}

//Ejercicio 4//no lo realice//