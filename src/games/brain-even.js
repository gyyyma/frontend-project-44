import game from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = () => {
  const random = getRandomNumber();
  const even = random % 2 === 0 ? 'yes' : 'no';
  return [random, even];
};

export default function playBrainEven() {
  game(gameTask, question);
}
