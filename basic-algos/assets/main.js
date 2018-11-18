// Create a variable hacker1 with the driver's name

// Print "The driver's name is XXXX"

// Create a variable hacker2 and ask the user for the navigator's name

// Print "The navigator's name is YYYY"


let hacker1 = "Marco";
console.log("The driver's name is", hacker1);
let hacker2 = prompt("What's your name?");
console.log("The navigator's name is", hacker2);



// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has", hacker1.length, "characters");

} else if (hacker1.length<hacker2.length){
  console.log("Yo, navigator got the longest name, it has", hacker2.length, "characters");

} else {
  console.log("wow, you both got equally long names,", hacker1.length, "characters!!");
}


//=================================================

// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
let hacker1Mayus = '';

for(var i = 0; i< hacker1.length; i++){

    hacker1Mayus += hacker1[i].toUpperCase() + " ";
}
// console.log(hacker1Mayus);



// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

let hacker2Revers;

for( var j = hacker2.length; j>=0; j--){
    hacker2Revers += hacker2[j];
}

// console.log(hacker2Revers);


// Depending on the lexicographic order of the strings, print:
// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?

if (hacker1.localeCompare(hacker2)=== -1){
  console.log("The driver's name goes first");

}else if (hacker1.localeCompare(hacker2)=== 1){
  console.log("Yo, the navigator goes first definitely");

} else {
  console.log("What?! You both got the same name?");
}

// ------------------- PALINDROME CHECK ----------------------------

newStr = "";
inverseStr = "";

function palidromeCheck (str){
  newStr = str.toLowerCase().replace(/\s/g,'');

  for (var s = newStr.length; s > 0; s--){
    inverseStr = newStr[s];
  }
  
  if (newStr === inverseStr){
    console.log ("Wow we've got a palindrome!");
  }else{
    console.log("This is not a palindrome");
  }
  
}
  
  
palidromeCheck('Amor Roma');


palidromeCheck('Marco Gallo');







// console.log(string1);

// var name = "Marco Gallo";
// var newName = name.toLowerCase().split("");
// var newNewName = [];

// for (var i = 0; i < newName.length; i++){
//  if (newName[i] === " "){
//    newName[i]= "";  
//  }
// }







