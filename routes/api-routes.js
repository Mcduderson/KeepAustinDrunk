// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // POST route for saving a new post & tags



    console.log(req.body, 'req.body');
    const newPost = {
      location: req.body.location,
      body: req.body.body,
      userName: req.body.userName,
      UserId: req.user.id
    };

    db.Post.create(newPost).then(postInfo=>{
      res.json(postInfo);
    });
  })
    app.get("/api/posts", function (req, res) {
      db.Post.findAll({}).then(function (dbPost) {
        res.json(dbPost);
      });
    });


    app.get("/api/businesses/", function (req, res) {
      let API_KEY = "I2SLuyyKWHvDg8heVcUEXkrNxuWiWE-1Qe2SEVE2bGwJ-yk4bNbUoo4_30UN0cPCLAL5csPI17_pUKwgJiqFn4EHzK2KakXxtiLb5Q6BXoM990rSIziXHBLRWEKgX3Yx"
      // REST
      var ENDPOINT = `businesses/search?location=${req.query.zip}&locale=en_US&categories=bars&term=${req.query.q}`
      let yelpREST = axios.create({
        baseURL: "https://api.yelp.com/v3/",
        headers: {
          Authorization: `Bearer ${"I2SLuyyKWHvDg8heVcUEXkrNxuWiWE-1Qe2SEVE2bGwJ-yk4bNbUoo4_30UN0cPCLAL5csPI17_pUKwgJiqFn4EHzK2KakXxtiLb5Q6BXoM990rSIziXHBLRWEKgX3Yx"}`,
          "Content-type": "application/json",
        },
      })
      yelpREST(ENDPOINT).then(({ data }) => {
        res.json(data)
      })
    }
    )
}



