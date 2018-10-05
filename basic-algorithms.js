// Names and Input
// Create a variable hacker1 with the driver's name

// Print "The driver's name is XXXX"

// Create a variable hacker2 and ask the user for the navigator's name

// Print "The navigator's name is YYYY"

// --------------------------- Conditionals --------------------------- 
// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!

var hacker1 = 'A';

// console.log("The driver's name is XXXX");

var hacker2 = 'B';
// // var hacker2 = prompt("What's the navigators name:");

// console.log("The navigator's name is YYYY");


// if (hacker1.length>hacker2.length){
//   console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
// } else if (hacker2.length>hacker1.length){
//   console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
// }else{
//   console.log("wow, you both got equally long names, " + hacker1.length + "characters!!");
// }


// ---------------------- LOOPS ---------------------------------
// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"


// console.log(hacker1.toUpperCase(' ').split(''));

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var newHacker = '';

for (var i = hacker1.length - 1; i >= 0; i--){
   newHacker += hacker1[i];
}

console.log(newHacker);

// ---------------------------  Depending on the lexicographic order of the strings, print: --------------

// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?

if (hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first");
}else if(hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely");
}else{
  console.log("What?! You both got the same name?");
}


// ---------------------------  Bonus Time! --------------------------- 
// Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Go to lorem ipsum generator and:

// Generate 3 parragraphs. Store the text in a String
// Make your program count the number of words in the string
// Make your program count the number of times the latin word et appears