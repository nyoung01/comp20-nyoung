console.log("in script!");
function parse() {
	console.log("first flag");
	request = new XMLHttpRequest();
	request.open("get", "data.json", true);
	console.log("second flag");
	request.onreadystatechange = parseData;
	request.send();

function parseData() {
	console.log("in callback " + request.readyState);
	if (request.readyState == 4 && request.status == 200) {
		alert("Got data back!");
		data = JSON.parse(request.responseText);
		document.getElementById("messages").innerHTML = request.responseText;
	}
}