// Task1:
function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function(name) {
  return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1('Алла'));
console.log(getName2('Анна'));
console.log(getName3('Инна'));


// Task2:
function getSumOfNumbers (number, type = 'odd') {
  let sum = 0;
  switch (type) {
    case '':
      for ( let i = 0; i <= 10; i++ ) {
        sum += i;
      }
      break;
    case 'even':
      for ( let i = 0; i <= 10; i++ ) {
        if ( i % 2 === 0 ) {
          sum += i;
        }
      }
      break;
    case 'odd':
      for ( let i = 0; i <= 10; i++ ) {
        if ( i % 2 !== 0 ) {
          sum += i;
        }
      }
      break;
    default: console.log('Вы выбрали неизвестный type.');
  }
  return sum;
}

const sumOfNumbers = getSumOfNumbers(10, '');
if ( sumOfNumbers > 0 ) {
  console.log(`Ваша сумма = ${sumOfNumbers}`);
}


// Task3:
function getDivisorsCount(number = 1) {
  let divisorsCount = 0;
  if (Number.isInteger(number)) {
    for ( let i = 0; i <= number; i++ ) {
      if ( number % i === 0 ) {
        divisorsCount ++;
      }
    }
  } else {
    alert(`${number} должен быть целым числом и больше нуля!`);
  }
  return divisorsCount;
}

const getDivisorsCountResult = getDivisorsCount(30);
console.log(`Количество делителей для введенного числа = ${getDivisorsCountResult}`);
