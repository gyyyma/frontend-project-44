import readlineSync from 'readline-sync';
import askName from '../cli.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateQuestion = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};

export default function playBrainGcd() {
  console.log(gameTask);
  const playerName = askName();
  let attempts = 3;
  while (attempts > 0) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct! ');
    } else {
      console.log(`'${playerAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    attempts -= 1;
  }
  console.log(`Congratulations, ${playerName}!`);
}
