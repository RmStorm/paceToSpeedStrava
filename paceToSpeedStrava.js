/*
Find the Paces and convert them to Speeds
*/
var contentBoxes = document.getElementById("dashboard-feed").getElementsByClassName("stat");

for (var i = 0; i < contentBoxes.length; i++) {
	childNode = contentBoxes[i].getElementsByClassName("stat-subtext");
	if (childNode[0].innerHTML == "Pace") {
		var pace = contentBoxes[i].getElementsByClassName("stat-text")[0].innerHTML
		var speed = 1/((parseInt(pace[0])*60+parseInt(pace[2]+pace[3]))/3600)
		console.log(speed)
		contentBoxes[i].getElementsByClassName("stat-text")[0].textContent = (Math.round((speed + 0.00001) * 100) / 100) + ' km/h'
	}
}