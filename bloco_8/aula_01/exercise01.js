const wakeUp = () => 'Acordando'
const breakFast = () => 'Bora tomar cafe'


const doingThings = (func) => {
  const result = func()
  console.log(result)
}

const newEmployees = () => {
  const employees = {
    id1: creatPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: creatPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: creatPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const creatPerson = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return {name, email: `${email}@betrybe.com`};
}

console.log(newEmployees(creatPerson))