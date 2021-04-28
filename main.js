/*variables*/
// let myvariable = "cat, dog, alpaca, rabbit, axolotl";
// document.getElementById("animals").innerHTML = myvariable;
let myvariable1 = "cat";
document.getElementById("animals1").innerHTML = myvariable1;

let myvariable2 = "dog";
document.getElementById("animals2").innerHTML = myvariable2;

let myvariable3 = "alpaca";
document.getElementById("animals3").innerHTML = myvariable3;

let myvariable4 = "rabbit";
document.getElementById("animals4").innerHTML = myvariable4;

let myvariable5 = "axolotl";
document.getElementById("animals5").innerHTML = myvariable5;

/*equetion*/
document.getElementById("equetion1").innerHTML = 49 + 20 - 19;

document.getElementById("equetion2").innerHTML = (30 + 20) * 10;

/*functions*/
var z = myFunction (40, 20, 10);
document.getElementById("function1").innerHTML = z;

function myFunction (a, b, c) {
	return  a + b - c;
}

/*Conditions*/
function myFunction1 (){

	var hour = new Date().getHours();
	var greeting;
	if (hour < 10) {
		greeting = "Buenos dias";
	} else {
		greeting = "hola";
	}
	document.getElementById("condition").innerHTML = greeting;
}