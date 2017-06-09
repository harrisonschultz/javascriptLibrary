function person(name, age, favoriteShows ){
	this.name = name;
	this.age = age;
	this.favoriteShows = favoriteShows;

	this.birthday = function(){
		this.age++;
	}
	this.compareShows = function(p){
		var commonShows = [];

		for(var x = 0; x < p.favoriteShows.length; x++){

			if (this.favoriteShows.lastIndexOf(p.favoriteShows[x]) != -1){
				commonShows.push(p.favoriteShows[x]);
			}
		}
		if (commonShows.length >= 1){
			console.log(commonShows);
		}
		else{
			console.log("No shows in common");
		}

	}
	this.aboutMe = function(){
		console.log("Hello,  my name is " + this.name + " and I am " + this.age  +" years old, and one of my favorite shows is " + this.favoriteShows[Math.floor(Math.random() * this.favoriteShows.length - 1)]);
	}

}
var m1 = new person("m1",1,["asdf","a","d","s","f"]);
var m2 = new person("m2",2,["asd","2","3","s","asdf"]);
var m3 = new person("m3",3,["asdf","a","d","s","f"]);
var m4 = new person("m4",4,["asdf","a","d","s","f"]);
var a5 = new person("a5",5,["asdf","a","d","s","f"]);


m1.compareShows(m2);
m1.aboutMe();


var personArray = [m1,m2,m3,m4,a5]
var showArray = ["adsf","a","g","v","e","r","c","t","x","l"];

function randomPerson(name,age){
	var shows = [];
	for(var x = 0; x < 5; x++){
				shows.push(showArray[x]);
			};
		
	person.call(this, name, age,shows);
}

var r1 = new randomPerson("her",2);
console.log(r1.favoriteShows);
r1.aboutMe();

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var currentWord = "";
var randomNum;

function personRandomNameAge(){
		currentWord = "";
		for(var y = 0; y < 5; y++){
			randomNum = Math.floor(Math.random()*26);
			currentWord = currentWord.concat("", alphabet[randomNum]);
		}
	randomPerson.call(this,currentWord, Math.floor(Math.random()*50));
	personArray.push(this);
}

var final1 = new personRandomNameAge();
console.log(personArray);
//console.log(personArray);

function removeVowelNames(peoples){

	for(p in peoples){
		if (peoples[p].name.substring(0,1) == "a" || peoples[p].name.substring(0,1) == "e" || peoples[p].name.substring(0,1) == "i" || peoples[p].name.substring(0,1) == "o" || peoples[p].name.substring(0,1) == "u"){
			console.log("removed " + peoples[p]);
			delete peoples[p];

		}
	}

}
removeVowelNames(personArray);
console.log(personArray);
