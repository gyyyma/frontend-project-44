import readlineSync from 'readline-sync';
import askName from './cli.js';

export default function game(gameTask, generateQuestion) {
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
