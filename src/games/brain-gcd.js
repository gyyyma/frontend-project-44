import game from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  return num1;
};

const generateQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

const playBrainGcd = () => {
  game(gameTask, generateQuestion);
};

export default playBrainGcd;
