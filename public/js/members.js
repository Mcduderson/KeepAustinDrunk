// // var Post = require("./models/post.js");
var userName;

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    userName = data.email;
    $(".member-name").text(data.email);
  });

  $(document).on('click', '.searchbtn', function (e) {

    var searchInput = $("#searchInput").val()
    var zipCode = $("#zipCode").val()
    var store = "Torchys"
    $.get(`/api/businesses?q=${searchInput}&zip=${zipCode}`).then(data => {
      $(".card-body").empty()
      for (var i = 0; i < data.businesses.length; i++) {
        // for(var i = 0; i < 2; i++){
        var business = data.businesses[i]
        var link = $("<a>").text(business.name).attr("href", business.url)
        var price = $("<price>").text(business.price).attr("text", business.price)
        var rating = $("<rating>").text(business.rating).attr("text", business.rating)
        var location = $("<location>").text(business.location.address1).attr("text", business.location)
        var image = $("<img>").attr("src", business.image_url)
        $(".business-name").append(link)
        $(".price-amount").append(price)
        $(".rating-star").append(rating)
        $(".business-location").append(location)
        $(".yelp-img").append(image)

        // var yelpEl = $("container");
        // var businessEl = $("<div>").addClass("card w-75");
        // var businessCard = $("<div>").addClass("card-body");
        // var linkTitle = $("<h5>").addClass("card-title").attr(link);
        // var priceTitle = $("<li>").addClass("list-group").text(price);

        // yelpEl.append(businessEl)
        // businessEl.append(businessCard);
        // businessCard.append(linkTitle);
        // businessCard.append(priceTitle);

      }
      // data.businesses.forEach(business=>{
      //  var link = $("a").text(business.name).attr("href", business.url)
      //  var image = $("img").attr("src", business.image_url)
      //  $(".card-body").append(link)
      //  $(".card-body").append(image)
      // })
      console.log(data)
    })

  })

  function formData() {
    // send data to database
    // DO POST
    var formData = {
      body: $("#textArea").val(),
      location: $("#bar").val(),
      userName: userName
    }
    console.log(formData)
    return formData;
  }
  $(document).on('click', '#post-button', function (event) {
    // html post
    $.ajax({
      type: "POST",
      url: "/api/addpost",
      data: formData()
    }).then(function () {
      var textPost = $("#textArea").val();
      var formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
      var location = $("#bar").val();
      var postEl = $(".container");
      var cardEl = $("<div>").addClass("card w-75");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h5>").addClass("card-title").text(location);
      var cardText = $("<p>").addClass("card-text").text(textPost);
      var newPostUsername = $("<small>").text(userName + " " + formattedDate);
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


  $(document).on('click', '.dropbtn', function () {
    console.log("test");
  });
});