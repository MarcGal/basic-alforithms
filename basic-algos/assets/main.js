// Create a variable hacker1 with the driver's name

// Print "The driver's name is XXXX"

// Create a variable hacker2 and ask the user for the navigator's name

// Print "The navigator's name is YYYY"


// let hacker1 = "Marco";
// console.log("The driver's name is", hacker1);
// let hacker2 = prompt("What's your name?");
// console.log("The navigator's name is", hacker2);



// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!

// if (hacker1.length > hacker2.length){
//   console.log("The Driver has the longest name, it has", hacker1.length, "characters");

// } else if (hacker1.length<hacker2.length){
//   console.log("Yo, navigator got the longest name, it has", hacker2.length, "characters");

// } else {
//   console.log("wow, you both got equally long names,", hacker1.length, "characters!!");
// }


// //=================================================

// // Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
// let hacker1Mayus = '';

// for(var i = 0; i< hacker1.length; i++){

//     hacker1Mayus += hacker1[i].toUpperCase() + " ";
// }
// // console.log(hacker1Mayus);



// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

let hacker2Revers;

for( var j = hacker2.length; j>=0; j--){
    hacker2Revers += hacker2[j];
}

console.log(hacker2Revers);


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
  newStr = str.toLowerCase().replace(/[\W_]/g,'');

  inverseStr = newStr.split("").reverse().join("");

  if (newStr === inverseStr){
        console.log ("Wow we've got a palindrome!");
      }else{
        console.log("This is not a palindrome");
      }
};
  
  
palidromeCheck('step on no pets');




// ------------------- Paragraph program ----------------------------

var para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac pulvinar purus, vitae tincidunt lorem. Nulla sagittis ante sed felis gravida blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam felis mi, id volutpat velit sagittis et. Morbi sit amet maximus purus. Aenean tortor turpis, blandit eget enim a, dictum bibendum leo. Vestibulum elementum ultrices dignissim. Vestibulum ac neque vel ex malesuada convallis. Curabitur purus urna, pellentesque vel elit vel, malesuada feugiat turpis. Morbi et eros purus. In auctor blandit laoreet. Curabitur volutpat mauris sed sem pretium, vitae facilisis libero consequat. Donec luctus tortor at congue auctor. Nullam diam metus, tempus convallis enim vitae, accumsan feugiat sapien. Morbi a nunc nec tortor scelerisque rutrum non suscipit mauris. Proin elit turpis, ornare nec finibus ut, pretium eget nunc";

var etNumber = 0;

function paragraph (parag){

  separateWords = parag.split(" ");
  numberOfWords = separateWords.length;
  console.log(numberOfWords);


// ESTA FUNCION NO ESTA CONTANDO DEBIDAMENTE, NO ENTIENDO PORQUE.
  for (var d = 0; d < separateWords.length; d++){
    if (separateWords[d] === "et"){
      etNumber ++;
    }
    return etNumber;
  }
  console.log(etNumber);
  
}

paragraph(para);