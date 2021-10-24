

//pseudocode
//input single number
//mske that number a list of numbers until reaching the number

//element is rolled element[i] number of times

// using command line input 


//console.log(process.argv);
const input = process.argv.slice(2);
console.log(typeof input);




/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let numberRolled = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is
  //inclusive and the minimum is inclusive
  console.log(numberRolled);
  return numberRolled;
}
getRandomIntInclusive(1, 6);

*/

function rollingDice() {
  let numberArray = [];
  //numberArray.length = input;
  for (let i = 0; i < input; i++) {
    let numberRolled = Math.floor((Math.random() * 6) + 1);
    console.log(numberRolled);
    numberArray.push(numberRolled);
    //  numberArray += numberRolled;
    //numberArray += ", ";
  }
  console.log(numberArray);
  return numberArray;
}


function joinList(array) {
  let sentence = "";
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      sentence += array[i];
      sentence += ", ";
    } else if (i === array.length - 1) {
      sentence += array[i];
    } else if (array.length === 1) {
      sentence += array[0];
    }
  }

  return sentence;
}

/*
const diceOutput = rollingDice(input);
console.log({ diceOutput }); // to have  anice labelled output

const joinDiceOutput = joinList(diceOutput);
console.log({ joinDiceOutput });

//solve by funciton composition
*/

const diceRoller = joinList(rollingDice(input));
console.log(`Rolled ${input} dice: ${diceRoller}`);


