require("dotenv").config();

// library to help handle Yelp API
// see docs: https://github.com/tonybadguy/yelp-fusion
var yelp = require("yelp-fusion");

// grabs API Key from .env file so we don't publish the key itself
const yelpKey = process.env.YELP_API_KEY;

// FOR TESTING: dummy search parameters
const searchRequest = {
  term:"coffee",
  location: "08610",
  limit: 5,
  sort_by: "rating"
};

// plugs our API key into the yelp handler
const client = yelp.client(yelpKey);

// Converts meters to miles and rounds to 2 decimal places
function getMiles(m) {
  /* multiply length in meters (m) to convert to length in miles
   * multiply by 100 to get a whole number
   * divide by 100 to give us 2 decimals
   * **/
  return Math.round((m*0.000621371192) * 100) / 100;
}


/*** TODO: Tie into AJAX calls on front-end ***/

client.search(searchRequest).then(response => {
  
  /*  FOR TESTING: default code to grab + display JSON of 1st result 
  // grabs 0th item from results array and stores as a variable
  const firstResult = response.jsonBody.businesses[0];

  // makes JSON object readable
  const prettyJson = JSON.stringify(firstResult, null, 4);
  
  // returns full JSON object for troubleshooting purposes
  console.log(prettyJson);*/

  // loops through first 5 results
  for (var i = 0; i < 5; i++) {
    
  // store the stuff we want under more manageable names
  const resName = response.jsonBody.businesses[i].name;
  const resAddr = response.jsonBody.businesses[i].location.display_address;
  const resRating = response.jsonBody.businesses[i].rating;
  const resDist = response.jsonBody.businesses[i].distance;

  // plug distance into the conversion function we built before
  const distMiles = getMiles(resDist);

  // build out our results table
  $("#yelp-table").append("<tr><td>" + resName + "</td><td>" + resRating + "</td><td>" + resAddr + "</td><td>" + distMiles + "</td></tr>");

  // FOR TESTING: print results in readable format
  console.log(
    resName + "\n" +
    resRating + " stars \n" + 
    resAddr + "\n" + 
    distMiles + " miles away \n" +
    "******"
    );
  }
  // catch & return any errors
}).catch(e => {
  console.log(e);
});