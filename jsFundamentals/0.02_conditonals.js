//conditionals

/*
<   Greater than
>   Less than
<=  Less than or equal to
>=  Greater than or equal to
==  Equal to
=== Strictly Equal To
!   Not
!=  Not equal to
&&  And
||  Or

*/

console.log(1>3);
console.log(10 != 10);

var name ="Kenn";
console.log(name == "kenn");

console.log(6 === "6");
console.log(6 == "6");

if(4563 % 2 === 0){
	console.log("this number is even");
}

var username = "admin";
var password = "test123";

if(username == "admin" ){
	
	if(password == "test123"){
		console.log("you have been granted access");
	}
	else{
		console.log("Incorrect password");
	}
}

else{
	console.log("Incorrect username");
}

var wins = 2;
var losses = 2;

if(wins >= losses){
	console.log("scrubs dont even know how to play the game");
}
else if (wins < losses){
	console.log ("We were sandbagging for the draft");
}
else{
	console.log("You punks are lucky you didnt have to play us")
}

var i =1;
for(i = 1; i <= 100; i++){
	if(i % 3==0 && i % 5 ==0){
		console.log("FizzBuzz");
	}
	else if (i % 3 == 0){
		console.log("Fizz")
	}
	else if ( i % 5==0){
		console.log("Buzz");
	}
	else{
		console.log(i);
	}
}