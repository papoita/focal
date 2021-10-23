/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
/*
//Pseudocode

input is an array
that returns a string
for each element in the array add the element to the string
after each element add a coma
except for the last element in the array
*/

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
  } return sentence;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
