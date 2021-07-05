const sorteio = (aposta, msg) => {
 
  const sorteado = Math.floor(Math.random() * 5 ) + 1 ;
  
  console.log(sorteado)

  return msg(aposta, sorteado) ? 'Venceu' : 'Perdeu'
}

const verificar = (aposta, sorteado) => aposta === sorteado ;





