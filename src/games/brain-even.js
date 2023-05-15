import readlineSync from 'readline-sync';
import askName from '../cli.js';
import generateRandomNumber from '../utils.js';

function isEven(num) {
  return num % 2 === 0;
}

export default function playBrainEven() {
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
