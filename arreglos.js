/Ejercicio obtenerSuma//
function obtenerSuma(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return suma;
}
//Ejemplos//
const numeross = [1, 2, 3, 4, 5];
const resultado = obtenerSuma(numeross);
console.log(resultado);

//Ejercicio obtenerPares//
function obtenerPares(numeros) {
  let pares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }

  return pares;
}
//Ejemplos//
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = obtenerPares(numero);
console.log(numerosPares);

//Ejercicio obtenerPromedioPonderado//
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    throw new Error("Los arreglos deben tener la misma longitud.");
  }

  let sumaNotas = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }

  const promedioPonderado = sumaNotas / sumaPesos;
  return promedioPonderado;
}

//Ejemplo//
const notas = [8, 7, 9, 6];
const pesos = [0.3, 0.3, 0.2, 0.2];
const promedio = obtenerPromedioPonderado(notas, pesos);
console.log("Promedio ponderado:", promedio);

//Ejercicio obtenerMaximo//
function obtenerMaximo(numeros) {
  let maximo = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }

  return maximo;
}
//Ejemplo//
const numeros = [10, 5, 8, 20, 3];
const maximo = obtenerMaximo(numeros);
console.log(maximo);