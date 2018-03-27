// Developer: Bill Moffa
// Date: 2018-03-13

      var express = require("express");

      var bodyParser = require("body-parser");
      var mongoose = require("mongoose");
      var request = require("request");
      var cheerio = require("cheerio");
      var expressvalidator = require('express-validator');
      var axios = require("axios");

      var PORT = 3000;

      // Initialize Express
      var app = express();

      // Configure middleware

      // Use body-parser for handling form submissions
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json())
      // Use express.static to serve the public folder as a static directory
      app.use(express.static(process.cwd() + '/public'));

      // Require all models
      //var db = require(process.cwd() + '/models');
      // Set mongoose to leverage built in JavaScript ES6 Promises
      // Connect to the Mongo D

      mongoose.Promise = Promise;
      var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapemedia";
      mongoose.connect(MONGODB_URI,{
            useMongoClient: true
      })

      // Set Handlebars.
      var exphbs = require("express-handlebars");
      app.engine("handlebars", exphbs({ defaultLayout: "main" }));
      app.set("view engine", "handlebars");

      // Import routes and give the server access to them.
      var routes = require(process.cwd() + "/controllers/routes.js");
      app.use('/',routes);

      // Start the server
      app.listen(PORT, function() {
        console.log("App running on port " + PORT + "!");
      });
