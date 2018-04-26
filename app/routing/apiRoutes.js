
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// This data sources holds our array of friends.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get("/api/friends", function (req, res) {
		res.json(friendsData);
	});


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate JavaScript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post("/api/friends", function (req, res) {

		// req.body is available since we're using the body-parser middleware

		// TODO: Handle compatability logic here too.
		var totalDifferenceArray = [];
		var totalDifference = 0;
		// Loop through friends array.
		for (let i = 0; i < friendsArray.length; i++) {
			// Loop through each score array on each friend and find the total difference.
			for (let j = 0; j < req.body.scores.length; j++) {
				totalDifference += Math.abs(req.body.scores[j] - friendsArray[i].scores[j]);
			}
			totalDifferenceArray.push(totalDifference);
			totalDifference = 0;
		}

		friendsData.push(req.body);

		var closestMatch = totalDifferenceArray.findIndex(Math.min(totalDifferenceArray));

		// TODO: Need to then display this in html.
		res.json(friendsArray[closestMatch]);


		

	});

};