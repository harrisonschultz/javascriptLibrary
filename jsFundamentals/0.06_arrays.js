//Arrays

var students = ["Harrison", "Rose", "Ben", "Caitlyn", "Kay"];
console.log(students);
students.push("Aaron");

students.pop("students");



for (var s in students){
	console.log(students[s]);
}

var num = [];
var x = 0;
for(x=1;x <= 10; x++){
	num.push(x);
	console.log("current number: " + num[x-1]);
}

for( var t in num){
	console.log(num[t]);
}

var primes = [];
var numPrimes = 15;

for (x =0; x <15;x++){
	primes.push(Math.floor(Math.random()*50));
	console.log("Prime check" + primes[x]);
	for(var i = 2; i < primes[x]; i++){
		if(primes[x] % i == 0){
			numPrimes -= 1;
			break;
		}
	}
}
console.log("There are " + numPrimes + " prime numbers in this array");

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomWords = [];
var currentWord = "";
var randomNum

for(var x = 0; x < 5; x++){
	currentWord = "";
	for(var y = 0; y < 5; y++){
		randomNum = Math.floor(Math.random()*26);
		console.log(alphabet[randomNum]);
		currentWord = currentWord.concat("", alphabet[randomNum]);
		console.log(currentWord);
	}
	randomWords.push(currentWord);	
}
console.log(randomWords);


