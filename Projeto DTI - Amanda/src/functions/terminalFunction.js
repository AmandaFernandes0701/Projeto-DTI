import readline from 'readline';
import { calculateBestPetShop } from './calculatePrices.js';

import chalk from 'chalk';

console.log(chalk.magenta.bold('\nProjetinho da Amanda :)  --> DTI'));
console.log(
  chalk.bold(
    '\nSeja muito bem vinda(o)! <3 \nInsira os dados no terminal e descubra qual Pet Shop te fornecerá o melhor custo benefício'
  )
);
console.log(
  '\n===================================================================================================='
);

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
  const selectedDate = await getInput(
    chalk.italic('\nInforme a data no formato dia/mes/ano: ')
  );
  const numSmallDogs = parseInt(
    await getInput(
      chalk.italic('\nInsira a quantidade de cachorros pequenos: ')
    ),
    10
  );
  const numBigDogs = parseInt(
    await getInput(
      chalk.italic('\nInsira a quantidade de cachorros grandes: ')
    ),
    10
  );

  const bestPetShop = calculateBestPetShop(
    selectedDate,
    numSmallDogs,
    numBigDogs
  );
  console.log('\n');
  console.log(bestPetShop.name);
  console.log(bestPetShop.price);

  rl.close();
}

terminalFunction();
