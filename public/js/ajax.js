/* This was recycled from Project 1
 * It hasn't really been edited yet! (8/22 19:12)
 * 
 * TODO: Check against newly-built code to avoid redundancy
 * TODO: Check routes, etc to be sure everything still points where it's supposed to!
 */
  
 //empty array for storing venue locations
var venueLocation = [];

$(document).ready(function() {

// Event Handler to pull the event API when clicking the submit button
$("#submit").on("click", function() {
  event.preventDefault();

  //Creating a variable that holds the city and then get the value entered
  var cityAjax = $("#userCity").val().trim();
      //console.log(cityAjax);
  // Creating a variable that holds the datetime and then get the value enetered
  var startDateTimeAjax = $("#userDate").val().trim() + "T12:00:00Z";
      //console.log(startDateTimeAjax);
  // Creating the callback queryURL based on the parameters eneterd
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&startDateTime=" + startDateTimeAjax +
                  "&city=" + cityAjax + "&apikey=tb4GUiGrLAFXaXdMFqqWdf1IMN71PGCa";


// Creating the Ajax call for the API ticketmaster
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(tmResponse) {
  // empty the result so each time it loads with new results and not putting them over each other
  $("#ticket-table").empty();
  console.log(tmResponse);
  // creating a variable that holds the events
  var results = tmResponse._embedded.events;

    // looping over the results
    for (var i = 0; i < results.length; i++) {
      var eventName = results[i].name ;
      var venue = results[i]._embedded.venues[0].name;
      var urlLink = results[i].url ;
      console.log(eventName);
      console.log(venue);
      console.log(urlLink);
      
      // build table with results
      $("#ticket-table").append("<tr><td>" + eventName + "</td><td>" + venue + "</td><td><a href= " + urlLink + "class=btn btn-primary btn-edit>Get Tickets </a> </td></tr>");

      };

    });
  });
});

$("#submit").on("click", function () {
  console.log("submit")
  var city = $("#userCity").val().trim();
  var date = $("#userDate").val().trim();
  if ( city ==="" || date ==="" ){
    console.log("HEllo")
    $("#myModal").modal("toggle")

      }
    })
    // <$("closeModalButton").on("click", function () {
    //  $("#myModal").modal("hide")

  
