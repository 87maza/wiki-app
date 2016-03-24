//"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&callback=?&format=json";
var searchText = document.getElementById('searchText')[0].value;

var submit = document.getElementById("submit");
submit.addEventListener('click', getResults(searchText));

function getResults(searchText){
	// var searchTerm = input.value;
	console.log(searchText);
	$.ajax({
		  url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchText + "&callback=?&format=json",
		  dataType: "jsonp",
		  success: function(response) {
		  	console.log(response);
		  }
	});
}