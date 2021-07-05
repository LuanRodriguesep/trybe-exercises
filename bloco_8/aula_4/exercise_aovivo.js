const numbers = [2, 1, 1, 1, 1]

const numbersReduce = numbers.reduce((valor1, valor2) => {
  return valor1 + valor2
},50)

console.log(numbersReduce)

const timesPaulistas = [
  {name: 'Palmeiras', states: 'SP'},
  {name: 'spfc', states: 'SP'},
  {name: 'santos', states: 'SP'},
  {name: 'curica', states: 'SP'},
]

timesPaulistas.push({name:'Portuguesa', states:'SP'})


const timesReduce = timesPaulistas.reduce((acumulador, valor) => {
   acumulador[valor.name] = valor.states
   return acumulador
},{ })



console.log(timesReduce)


const strFrase = ['maior' , 'time', 'do', 'mundo', '!']

const strReduce = strFrase.reduce((acumulador, valor) => {
  return `${acumulador} ${valor}`

}, 'O Palmeiras é o')

console.log(strReduce)