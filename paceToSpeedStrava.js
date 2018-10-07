/*
Find the Paces and convert them to Speeds
*/

// In most places a pace is accompanied by an abbreviation tag. The 'abbr' tags are put into an array
// The 'wrappedJSObject' method makes sure expando nodes are seen as well
var elements = document.wrappedJSObject.getElementsByTagName("abbr")

// Loop through the array and change the pace nodes
for (var i = 0; i < elements.length; i++) {
	if (elements[i].title == "minutes per kilometer") {
		// Create a km/h abbr element with the same classes as the originial abbr
		var abbrEl = createKmhAbbrElement(elements[i].classList)
		// Identify the parentnode and compute speed in km/h
		var paceNode = elements[i].parentNode
		var pace = paceNode.innerHTML
		var speed = 1/((parseInt(pace[0])*60+parseInt(pace[2]+pace[3]))/3600)
		// Replace the innerHTML with the new speed and abbr tag
		paceNode.textContent = speed.toFixed(1)+ " "
		paceNode.appendChild(abbrEl);
	}
}

function createKmhAbbrElement(classList) {
	// Creates a km/h abbr element with the classes as supplied in classlist
	// Note that classList is DOMTokenList so .forEach does not work
	var abbrEl = document.createElement('abbr');
	for (var ii = 0; ii < classList.length; ii++) {
		abbrEl.classList.add(classList[ii])
	}
	abbrEl.title = 'kilometers per hour'
	abbrEl.textContent = 'km/h'
    return abbrEl;
}