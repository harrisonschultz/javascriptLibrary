//objects

var emptyObject = {};

var johnQualls = {
//	Key			: Value
	name 		: "John Qualls",
	age 		: "39",
	hairColor	: "Brown",

}

console.log(johnQualls);

console.log(johnQualls.name);
console.log(johnQualls.name +" is of the age " + johnQualls.age);

johnQualls.height = "6ft";
console.log(johnQualls.height);


//Create an animal onject with the properties of type, weight, commonInIndiana, and habitat
var animal = {
	type: "doe",
	weight : "probably like 130 pounds",
	commonInIndiana : true,
	habitat: "temperate forest",
}

console.log(animal["habitat"]);
animal["nickName"] = "Bambi";
console.log(animal["nickName"] + " lives in a " + animal["habitat"]);

//Reassigning values

animal.type = "moose";

//change the weight of the animal property using the square bracket notation

animal["weight"]  = 600;

animal.moviesAboutMe = ["Rocky and Bullwinkle, Monty Python, National Lampoon's"];

// Objects with functions

var bryce = {
	name : "Bryce Greene",
	age : 55,
	vocation : "TA",
	email : "thebryceisright@gmail.com",
	greeting : function(){
							return "Greetings earthlings I am " + this.name + ". I am here to learn you." ;

						},
	contactMe : function(){
		return "Connect with me at " + this.email;
	},
	stuff : function(){
		console.log(this.greeting());
		console.log(this.contactMe());
	}
} 


//bryce.greeting();

bryce.stuff();


var paul = new Object();
//Object Constructor
paul.name = "Paul O'Connor";
paul.vocation = "curriculum master";
paul.hobbies =["rocking out code", "listening to good music", "baking banana muffins"];

//object constructor template
function hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvaliability = function(){
		return "There are "+this.rooms - this.booked + " rooms left";
	}}

var jw = new hotel("JW Marriot", 300, 250);

console.log(jw);


