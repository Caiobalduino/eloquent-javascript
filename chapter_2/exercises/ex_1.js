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