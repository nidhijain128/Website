<html>
	<head>
		<title> SERGO - SEaRch on the GO </title>
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
		<link rel="stylesheet" href="css/SphereAssessment.css"/>
		<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="js/SphereAssessment.js"></script>
		<link rel="icon" type="image/png" href="images/search.png" />
	</head>
	<body>
		<h2>Wiki Search Engine - Nidhi Jain</h2>
		<div class="jumbotron">
			<input type="text" id="SearchBox" class="form-control" width="10%" placeholder="Enter data to be searched"/><br>
			<button id="SearchButton" type="button" class="btn btn-lg btn-primary btn-block"><span>Search</span></button><br>
		</div>
		<div id="content">
			<div id="divLeft">
				<input type="image" id="previous" src="images/left.png" value="Previous">
			</div>
			<div id="contentPage">
			</div>
			<div id="divRight">
				<input type="image" id="next" src="images/right.png" value="Next">
				<select id="noTitles">
					<option value="2">2 titles per page</option>
					<option value="5" selected="selected">5 titles per page</option>
				</select>
			</div>
		</div>
		</noscript>
	<!--</body>-->
</html>
