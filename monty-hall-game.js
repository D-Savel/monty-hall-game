const readlineSync = require('readline-sync')
const { randomInt } = require('crypto')
const chalk = require('chalk')
const { closeGate, goatGate, carGate } = require('./picsGame')

let gates = [[1, 'goat'], [2, 'goat'], [3, 'goat']]
let playerGate = ''
let carGateNumber = 0

const nb = randomInt(0, 3)
gates[nb][1] = 'car'

for (const el of gates) {
  if (el[1] === 'car')
    carGateNumber = el[0]
}

console.clear()

/*Test
console.log(gates);
console.log(carGateNumber);
*/

let playerName = readlineSync.question('Entrez votre nom :')
console.log(`${closeGate[0]}${closeGate[1]}${closeGate[2]}`)
do {
  playerGate = readlineSync.question('Choisissez un numéro de porte (1,2,3) :')
}
while (playerGate !== '1' && playerGate !== '2' && playerGate !== '3')

console.clear()
console.log(`\n${playerName}, Vous avez choisi la porte ${playerGate}\nJe vais vous ouvrir une porte cachant une chèvre!`)

let gate1 = ''
let gate2 = ''
let gate3 = ''

switch (playerGate) {
  case '1':
    gate1 = closeGate[0]
    if (gates[1][1] === 'goat') {
      gate2 = chalk.red(goatGate[1])
      gate3 = closeGate[2]
    }
    else {
      gate2 = closeGate[1]
      gate3 = chalk.red(goatGate[2])
    }
    break;
  case '2':
    gate2 = closeGate[1]
    if (gates[0] === 'goat') {
      gate1 = closeGate[0]
      gate3 = chalk.red(goatGate[2])
    }
    else {
      gate1 = chalk.red(goatGate[0])
      gate3 = closeGate[2]
    }
    break;
  case '3':
    gate3 = closeGate[2]
    if (gates[0] === 'goat') {
      gate1 = chalk.red(goatGate[0])
      gate2 = closeGate[1]
    }
    else {
      gate1 = closeGate[0]
      gate2 = chalk.red(goatGate[1])
    }
    break;
}
console.log(`${gate1} ${gate2} ${gate3} `)

playerFinalGate = readlineSync.question(`\nConservez-vous la porte ${playerGate} ou choisissez-vous une autre porte?\nEntrez votre numéro de porte final :`)
playerGate = playerFinalGate

console.clear()
console.log(`Vous avez finalement choisi la porte ${playerGate}`);

if (playerGate === carGateNumber.toString()) {
  console.log(chalk.green('Vous avez gagné une voiture !'));
}
else {
  console.log(chalk.red('Vous avez perdu!\n'));
}

gate1 = chalk.red(goatGate[0])
gate2 = chalk.red(goatGate[1])
gate3 = chalk.red(goatGate[2])

switch (carGateNumber) {
  case 1:
    gate1 = chalk.green(carGate[0])
    break;
  case 2:
    gate2 = chalk.green(carGate[1])
    break;
  case 3:
    gate3 = chalk.green(carGate[2])
    break;
}

console.log(`${gate1} ${gate2} ${gate3} `)

