function parse() 
{
	//create XMLHttpRequest instance
	request = new XMLHttpRequest();
	//get data, create HTTP request
	request.open("GET", "data.json", true);
	//manage data
	request.onreadystatechange = parseData;
	//execute request
	request.send();
}

function parseData() 
{
	//request is ready and status code is successful
	if (request.readyState == 4 && request.status == 200) {
		result = document.getElementById("messages");
		data = JSON.parse(request.responseText);
		//place data in index.html
		for (i = 0; i < data.length; i++) {
			result.innerHTML += '<p class="input">' + data[i].content + ' <span id="name">' + data[i].username + "</span></p>";
		}
	}
}