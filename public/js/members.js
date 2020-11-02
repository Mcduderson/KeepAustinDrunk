$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

// input box displays username, time stamp(date), and location of hh 
// db posts , username, created_date, location, body

// dynamically create card showing username post and location with text box information
// store each post to the database
// allow picture? if time
// api map box if time