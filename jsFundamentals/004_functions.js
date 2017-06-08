//Functions
function weather(){
	console.log("rainy")
}

weather();

function shoes(brand){
	console.log("Man those " + brand + " are on fleek!");
}

shoes("crocs");
function add(num1,num2){
	console.log(num1 + num2);
}
add(34, 66);

function sum(num1,num2){
	return num1+num2;

}
console.log(sum(23,17));

function multiply(x,y){
	return x*y;
}
function divide(x,y){
	return x/y;
}
function subtract(x,y){
	return x - y;
}
function mod(x,y){
	return x%y;
}

function concat(str1,str2){
	console.log(str1+str2);
}

function bills(costPerUnit, unitsUsedPerDay){
	return costPerUnit * unitsUsedPerDay * 30;

}

function buySoda(numSodas){
	return "" + numSodas+ " sodas will cost you $" + (numSodas * .99 * 1.07);
}
console.log(buySoda(100))

function calculate(num1,num2,operator){
	if (operator == "+"){
		return num1 +num2;
	}
	else if (operator == "-"){
		return num1 - num2;
	}
	else if (operator == "*"){
		return num1* num2;
	}
	else if (operator  == "/"){
		return num1 /num2;
	}
	else if (operator == "%"){
		return num1 %num2;
	}
	else{
		throw "invalid arguements";
	}
}
try{
console.log(calculate(1,3,4));}

catch(err){
	console.log("invalid operator");
}

