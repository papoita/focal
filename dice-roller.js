

//pseudocode
//input single number
//mske that number a list of numbers until reaching the number

//element is rolled element[i] number of times

// using command line input 


//console.log(process.argv);
const input = process.argv.slice(2);
console.log(typeof input);

let numberRolled = getRandomIntInclusive(1, 6);


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is 
  //inclusive and the minimum is inclusive
  rollingDice(input);
}

function rollingDice() {
  numberArray = [];
  //numberArray.length = input;
  for (let i = 0; i < input; i++) {

    let numberOfNumbers = numberRolled * input);
    console.log(numberOfNumbers);
    numberArray += numberOfNumbers;
  } console.log(numberArray);
}
/*
function joinList(array) {
  let sentence = "";
  {
    if (i < array.length - 1) {
      sentence += array[i];
      sentence += ", ";
    } else if (i === array.length - 1) {
      sentence += array[i];
    } else if (array.length === 1) {
      sentence += array[0];
    }
  } return sentence;
}

*/