	var contentToDisplay=new Array();
	var length = "";
	var pageNoDisplayed=0;
	var noPages = 0;
	var firstPage = 0;
	var LastPage = 0;
	var noOfTitles = 0;
	
	function initialize() {
		contentToDisplay=new Array();
		length = "";
		pageNoDisplayed=0;
		noPages = 0;
		firstPage = 0;
		LastPage = 0;
		noOfTitles = 0;
		$("#next").css('visibility','hidden');
		$("#previous").css('visibility','hidden');
		$("#noTitles").css('visibility','hidden');
		document.getElementById("next").disabled = false;
		document.getElementById("previous").disabled = false;
		noOfTitles = document.getElementById("noTitles").value;
		document.getElementById("contentPage").innerHTML = "";
	}
	
	function fetchData() {
		initialize();
		var text = document.getElementById("SearchBox").value;
		var url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=' + encodeURI(text) + '&srprop=timestamp&callback=?';
		$.getJSON(url,function(data){
			length = data.query.search.length;
			if(length == 0) {
				document.getElementById("contentPage").innerHTML = "<h3 class='textalign'>Sorry! No Results found. Please try another keyword</h3>";
				}
			else {
				var j=0;
				if(length%noOfTitles==0)
					noPages = length/noOfTitles;
				else 
					noPages = length/noOfTitles + 1;
				lastPage = noPages - 1;
				for(var i=0;i<noPages;i++) {
					contentToDisplay[i] = "";
					j=i*noOfTitles;
					do {
						var title = decodeURI(data.query.search[j].title);
						var link = title.replace(/ /g,"_");
						contentToDisplay[i] +=  "<p class='textAlign'><a href='https://en.wikipedia.org/wiki/" + link + "' target='_blank' id='title" + j + "'>" + title + "</a></p><hr>";
						j++;
					}while(j%noOfTitles!=0);
				}
				SetContent(contentToDisplay[pageNoDisplayed]);
				$("#next").css('visibility','visible');
				$("#previous").css('visibility','visible');
				$("#noTitles").css('visibility','visible');
				checkPageNo();
			}
		});
	}
		
	function SetContent(contentToBeSet) {
		document.getElementById("contentPage").innerHTML = "";
		document.getElementById("contentPage").innerHTML += contentToBeSet;
		document.getElementById("contentPage").innerHTML += "<p id='heading' class='textAlign fontStyle'> Page " + (pageNoDisplayed+1) + " of " + noPages + "</p>";
	}
	
	$(document).ready(function(){
		$(function() {
		  $("#SearchBox").focus();
		});
		
	$("#SearchBox").keypress(function(e){
		if(e.which == 13) {
			fetchData();
		}
	});
	
	function checkPageNo() {
		if(pageNoDisplayed >= lastPage)
			document.getElementById("next").disabled = true;
		else
			document.getElementById("next").disabled = false;
		if(pageNoDisplayed <= firstPage)
			document.getElementById("previous").disabled = true;
		else
			document.getElementById("previous").disabled = false;
	}
		
	$("#next").click(function(){
		pageNoDisplayed++;
		SetContent(contentToDisplay[pageNoDisplayed]);
		checkPageNo();
	});
	
	$("#previous").click(function(){
		pageNoDisplayed--;
		SetContent(contentToDisplay[pageNoDisplayed]);
		checkPageNo();
	});
	
	$("#SearchButton").click(function(){
		fetchData();
	});
	
	$("#noTitles").change(function(){
		fetchData();
	});
});