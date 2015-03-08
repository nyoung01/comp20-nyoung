function parse() 
{
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onreadystatechange = parseData;
	request.send();
}

function parseData() 
{
	if (request.readyState == 4 && request.status == 200) {
		document.getElementById("messages").innerHTML = request.responseText;
		data = JSON.parse(request.responseText);
		for (i = 0; i < data.length; i++) {
			result += "<p>" + data[i]["content"] + " - " + data[i]['username'] + "</p>";
		}
	}
}