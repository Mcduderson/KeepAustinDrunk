// // var Post = require("./models/post.js");
// var moment = require("moment");

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});

// function formData() {
//   // send data to database
//   // DO POST
//   var formData = {
//     body: $("#textArea").val(),
//     location: $("#bar").val()
//   }
// }
$(document).on('click', '#post-button', function (event) {
  // html post
  // $.ajax({
  //   type: "POST",
  //   url: "/api/addpost",
  //   data: formData()
  // }).then(function () {
    var textPost = $("#textArea").val();
    $.get("/api/user_data").then(function (data) {
      var username = data.email;
      // var formattedDate = new Date(post.createdAt);
      // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var location = $("#bar").val();
      var postEl = $(".container");
      var cardEl = $("<div>").addClass("card w-75");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h5>").addClass("card-title").text(location);
      var cardText = $("<p>").addClass("card-text").text(textPost);
      var newPostUsername = $("<small>").text(username);
      newPostUsername.css({
        float: "right",
        color: "white",
        "margin-top":
          "-10px"
      });
      var cardButton = $("<button>").addClass("btn btn-outline-warning");
      $('#svgLikeBttn').last().clone().appendTo(cardButton);
      postEl.append(cardEl);
      cardEl.append(cardBody);
      cardBody.append(cardTitle);
      cardBody.append(cardText);
      cardBody.append(newPostUsername);
      cardBody.append(cardButton);
      // }
    });

  });
// });

// Click event to increase number with like button


var counter = 0;

$(document).ready(function () {

  $("#likes").click(function (event) {

    var likeBttn = $(event.target);

    counter++;

    likeBttn.text(counter);
  });

});





// input box displays username, time stamp(date), and location of hh 
// db posts , username, created_date, location, body


// store each post to the database
// allow picture? if time
