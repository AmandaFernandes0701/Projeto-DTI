import readline from 'readline';
import { calculateBestPetShop } from './calculatePrices.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function terminalFunction() {
  const selectedDate = await getInput('');
  const numSmallDogs = parseInt(await getInput(''), 10);
  const numBigDogs = parseInt(await getInput(''), 10);

  const bestPetShop = calculateBestPetShop(
    selectedDate,
    numSmallDogs,
    numBigDogs
  );

  console.log(bestPetShop.name);
  console.log(bestPetShop.price);

  rl.close();
}

terminalFunction();
