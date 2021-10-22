const args = process.argv;
//console.log(args); prints program, file path, args

//slice allows t only print the arguments
//console.log(args.slice(2));

//adding numbers
console.log(Number(args[2]) + Number(args[3]));


//function

function sum(args) {
  args.slice(2);
  args[0] + args[1];
}
console.log(sum());