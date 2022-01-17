// //function declaration
// function feedAnimal(animalName = 'Собака') {
//   console.log(`Животное ${animalName} было покормлено`);
// }
// feedAnimal('Лев');
//
// //function expression
//
// const feedAnimal = function(animalName) {
//   console.log(`Животное ${animalName} было покормлено`);
// };
// feedAnimal('Лев');

// стрелочная функция
// const feedAnimal = (animalName) => {
//   console.log(`Животное ${animalName} было покормлено`);
// };
// feedAnimal('Тигр');

const multiplyByFive = (number) => {
  return number * 5;
};
const result = multiplyByFive(10);
console.log('result', result);


const multiplyByFive = (number) => number * 5;
const result = multiplyByFive(10);
console.log('result', result);