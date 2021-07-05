const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];



function flatten() {
  return arrays.reduce((acumulador, valor) => acumulador.concat(valor),[])
}
//console.log(flatten())
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
