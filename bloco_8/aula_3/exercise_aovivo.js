/* Metodo Filter */

const jogadores= [
{
  nome:'Dudu',
  idade:29,
  posicao:'Ponta Esquerda',
},
{
  nome:'Bigode',
  idade:29,
  posicao:'centroavante',
},
{
  nome:'Rony',
  idade:28,
  posicao:'Ponta direita',
},
{
  nome:'Wesley',
  idade: 28,
  posicao:'Ponta esquerda',
},
{
  nome:'Breno',
  idade:31,
  posicao:'centroavante',
},
{
  nome:'L Adriano',
  idade: 32,
  posicao:'centroavante',
},
]

 // Treinando  o metodo filter

const atletaFilter = jogadores.filter((jogador) => {
  return jogador.idade === 29;
})

// metodo find

const atletaFind = jogadores.find((jogador) => {
  return jogador.idade === 29;
})

// metodo some

const atletaSome = jogadores.some((jogador) => {
  return jogador.idade === 29;
})

// metodo every

const atletaEvery = jogadores.every((jogador) => {
  return jogador.idade === 29;
})

// metodo forEach

const atletaFor = jogadores.forEach((jogador) => {
  const allAtletas = jogador
})

 const atacante = jogadores.filter((jogador) => {
   return jogador.posicao === 'centroavante'
 })

// RETORNA jogadores que iniciam com a letra B, ultilizando o FILTER.

 const jogadorB = jogadores.filter((jogador) => {
   //return jogador.nome[0] === 'B' 
   return jogador.nome.startsWith('B') // passando o parametro, o metodo busca o mesmo no inicio da srting

   //return jogador.nome.endsWith('a') // passando o parametro, o metodo busca o mesmo no final da srting
 });


 //console.log()


 /* Metodo MAP */

 const testeMap = jogadores.map((jogador) => {
  return `${jogador.nome} - ${jogador.posicao}`
 })

 console.log(testeMap)


 


