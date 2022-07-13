'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 
  //  i
  // [5, 1, 4, 2, 8]
  //  j
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const half = array.length / 2
  if(array.length < 2){
    return array;
  }
  const leftArray = array.splice(0, half)
  return mergeArrays(mergeSort(leftArray),mergeSort(array))
  function mergeArrays(leftArray, rightArray) {
    let ary = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            ary.push(leftArray.shift())  
        } else {
            ary.push(rightArray.shift())
        }
    }
    return [ ...ary, ...leftArray, ...rightArray ]
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
