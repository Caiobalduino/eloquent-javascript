//Exercises
// Write a loop that makes seven calls to console.log to output the following triangle:

// # 
// ## 
// ###
// ####
// #####
// ######
// #######

// Code:

for (let i = 1 ; i <= 7; i++) {
  console.log("#".repeat(i));
}

// More simple:

for (let i = 1; i <= 7; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
} 

/* 
Write a program that uses console.log to print all the numbers from 1 to 100, with 
two exceptions. For number divisible by 3, print "Fizz" instead of the number, and for numbers divisible
by 5 (and not 3), print "Buzz" instead.
And print "FizzBuzz" for numbers that are divisible by both 3 and 5. 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  } 
}

/* Chessboard
Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines.
At each position ofthe grid there is either a space or a # character. The characters should form a chessboard.
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it
works for any size, outputting a grid of the given wifth and height. 
*/

let size = 10; 
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n"; 
}

console.log(board);