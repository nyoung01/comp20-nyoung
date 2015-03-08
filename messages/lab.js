
function parse() {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	xhr.onreadystatechange = parseData;
	xhr.send();

function parseData() {
	console.log("in callback " + request.readyState);
	if (request.readyState == 4 && request.status == 200) {
		alert("Got data back!");
		data = JSON.parse(request.responseText);

		document.getElementById("messages").innerHTML = request.responseText;
	}
}