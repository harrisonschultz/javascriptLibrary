/* Original

var smartCar = {;
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(____, 15);
consoLe.log(smartCar.mpg);
console.Log(smartCar._____.calculateMpg());

*/


var smartCar = {
    smartCarMPG: function(totalMiles, totalGallons){   
			    console.log("MPG: ");
			    return totalMiles / totalGallons;
    },
    mpg:0
};

smartCar.mpg = smartCar.smartCarMPG(30, 15);
console.log(smartCar.mpg);
console.log(smartCar.smartCarMPG(30,15));