function hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvaliability = function(){
		return this.rooms - this.booked;
	}
}

var redRoofInn = new hotel("Red Roof Inn", 250, 230);
var alexander = new hotel("The Alexander", 500,150);
var hotels = [redRoofInn,alexander];

function showAllHotelsInfo(){
	for(var h in hotels){
		var hotelName = hotels[h].name;
		var hotelHtmlText = document.createTextNode(hotelName);
		var listItem = document.createElement("li");
		listItem.appendChild(hotelHtmlText);
		document.getElementById("hotels").appendChild(listItem);
		
	}
}
showAllHotelsInfo();