$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

$(document).on('click', '.searchbtn', function (e) {

var searchInput = $("#searchInput").val()
var zipCode = $("#zipCode").val()
var store = "Torchys"
$.get(`/api/businesses?q=${searchInput}&zip=${zipCode}`).then(data=> {
  $(".card-body").empty()
  for(var i = 0; i < data.businesses.length; i++){
    // for(var i = 0; i < 2; i++){
    var business = data.businesses[i]
    var link = $("<a>").text(business.name).attr("href", business.url)
    var image = $("<img>").attr("src", business.image_url)
    $(".card-body").append(link)
    $(".card-body").append(image)
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
  $('#svgLikeBttn').last().clone().appendTo(cardButton);
  postEl.append(cardEl);
  cardEl.append(cardBody);
  cardBody.append(cardTitle);
  cardBody.append(cardText);
  cardBody.append(cardButton);

});


// Click event to increase number with like button


var counter = 0;
   
$(document).ready(function() {

    $("#likes").click(function(event){
      
      var likeBttn = $(event.target);
      
        counter++;

        likeBttn.text(counter);
    });
    
});





// input box displays username, time stamp(date), and location of hh 
// db posts , username, created_date, location, body


// store each post to the database
// allow picture? if time
// api map box if time

$(document).on('click', '.dropbtn', function() {
console.log("test");
});
});