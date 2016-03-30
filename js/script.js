
$(document).ready(function() {
	$('#submit').on('click', function() {
	  $("#title").empty();
	  var searchText = document.getElementById('searchText').value;
	  console.log(searchText);
	  var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchText + "&callback=?&format=json";
	  $.getJSON(url, function(response) {
	  	console.log(response);
	    var length = response.query.search.length;
	    var title = document.getElementById('title');
	    var snippet = document.getElementById('snippet')


	    for (var i = 0; i < length; i++) {
	    	title.innerHTML += '<div class="tiles"><a href=\"https://en.wikipedia.org/wiki/' + response.query.search[i].title.replace(/ /g,"_") + "\"" + 'target="_blank"><h2>' + response.query.search[i].title + '</h2>' + '<p>' + response.query.search[i].snippet + '</p></a></div>';	
	    }
	  });  
	});
    $('#searchText').keypress(function(key){
    	//pressing enter is the same effect as onclick
      if(key.keyCode==13)
      $('#submit').click();
    });
});


//"https://en.wikipedia.org/w/api.php?action=query&format=json&list=prefixsearch&pssearch=" + input + "&callback=prefixCallback";