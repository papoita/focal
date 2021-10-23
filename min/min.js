//solutiom comparing numbers in the array
/*const min = function (numbers) {
  let minNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    // starting at numbers[0] would make it comparre to itself in the first loop
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];

    }

  }
  //console.log(minNumber);// shows in terminal within a squared bracket
  return minNumber;



}
console.log(min([1260, 490, 599, 1400, 820]));
//const flightPrices = min([1260, 490, 599, 1400, 820]);
*/
//solution using sort and obtaining the first integer

//let numbers = min([1260, 490, 599, 1400, 820]);
const min = function (numbers) {
  numbers.sort(function (a, b) {
    return a - b;

  });

  console.log(numbers[0]);
  return (numbers[0]);

}


/*

 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$ ${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);