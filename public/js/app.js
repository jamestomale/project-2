/* Most of this code was recycled from Project 1
 * We've moved the API key to the .env file but otherwise haven't changed much
 * TODO: Make sure this code still plays nice with the other kids
 * TODO: Double-check for route handling and redundancies
 */


require("dotenv").config();

// grabs API Key from .env file so we don't publish the key itself
const tmKey = process.env.TM_CONSUMER_KEY;


$(document).ready(function() {

  /*** Ticketmaster ***/
  
  function getFormData() {
    // getting data from user input
    var userCity = $("#userCity").val().trim();
    var userDate = $("#userDate").val().trim();

    var formInput = {
      city: userCity,
      date: userDate
    };
    
    return formInput;
  };

     
/*
// FOR TESTING: dummy parameters
const userDate = "2018-08-18";
const userCity = "Philadelphia";
*/

const queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&startDateTime=" +
    userDate + "T12:00:00Z&city=" + userCity + "&apikey=" + tmKey;

// FOR TESTING: print queryURL so we can check what's being queried
//console.log(queryURL);
    
    
$.ajax({
  type:"GET",
  url: queryURL,
  async:true,
  dataType: "json",
  success: function(json) {
    console.log(json);
    // Parse the response.
    // Do other things.
    console.log(queryURL);

  // loop through first 5 results
  for (var i = 0; i < 5; i++) {
    
    // store the objects we want under more manageable names
    var eventName = results[i].name;
    var venue = results[i]._embedded.venues[0].name;
    var urlLink = results[i].url;
  
    // FOR TESTING: print results in readable format
    console.log(
      eventName + "\n" +
      venue + " \n" + 
      urlLink + "\n"
      );
    }
              },
    error: function(xhr, status, err) {
      /* This was the default code provided in docs
       * TODO: add some error-handling here
       */

    }
  });

  /* This was error handling leftover from yelp-fusion
   * Commented out just in case it might work here, too
   * 
  // catch & return any errors
  /*}).catch(e => {
    console.log(e);
  });*/
  
/***  TODO: ADD YELP CODE ***/
});