$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});
$.getJSON("https://api.yelp.com/v3/businesses/{FIImoTWeCfkZTCONRHzPlQ}+"), function(data){

}
// console.log(fetch('https://api.yelp.com/v3/businesses/{FIImoTWeCfkZTCONRHzPlQ}'))