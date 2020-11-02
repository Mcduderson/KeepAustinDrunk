// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });

$(document).on('click', '#post-button', function (event) {
  
 var textPost = $("#textArea").val();
  // send the value to the server
 var location = $("#bar").val();
 var postEl = $(".container");
 var cardEl = $("<div>").addClass("card w-75");
  var cardBody = $("<div>").addClass("card-body");
  var cardTitle = $("<h5>").addClass("card-title").text(location);
  var cardText = $("<p>").addClass("card-text").text(textPost);
  var cardButton = $("<button>").addClass("btn btn-outline-warning");
  postEl.append(cardEl);
  cardEl.append(cardBody);
  cardBody.append(cardTitle);
  cardBody.append(cardText);
  cardBody.append(cardButton);

});


// Click event to increase number with like button
$(document).on('click', '#likes', function (event) {

}


// input box displays username, time stamp(date), and location of hh 
// db posts , username, created_date, location, body


// store each post to the database
// allow picture? if time
// api map box if time