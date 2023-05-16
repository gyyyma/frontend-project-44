import game from '../index.js';
import getRandomNumber from '../utils.js';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generateQuestion() {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function playBrainPrime() {
  game(gameTask, generateQuestion);
}
