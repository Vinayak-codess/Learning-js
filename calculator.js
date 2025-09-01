/*
Functions
Name a block of code
And use it later using that name as many times
*/

let operation = prompt("What operation would you like to do?");

//functions

function addition() {
	let a = prompt("Enter the First No.");
   let b = prompt("Enter the Second No.");
   console.log(parseInt(a) + parseInt(b))

}

function subtraction(){
	let a = prompt("Enter the First No.");
   let b = prompt("Enter the Second No.");	
   console.log(parseInt(a) - parseInt(b))
 
}

function multiplication(){
	let a = prompt("Enter the First No.");
   let b = prompt("Enter the Second No.");
	console.log(parseInt(a) * parseInt(b))

}

function division(){
	let a = prompt("Enter the First No.");
	let b = prompt("Enter the Second No.");
	console.log(parseInt(a) / parseInt(b))

}


if(operation === "add"){
    addition();
}

else if(operation === "sub"){
    subtraction();
}

else if(operation === "multiply"){
    multiplication();
}

else if(operation === "divide"){
    division();
}

else{
	console.log("Invalid Operation")
}

