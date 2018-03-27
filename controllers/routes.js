
// Node Dependencies
var express = require('express');
var router = express.Router();
var cheerio = require('cheerio')
var request = require('request')
var Headline = require('../models').Headline;
var scraper = require('../scripts/scraper.js')
var buildHeadline = require('../scripts/buildHeadline.js')
var itemList = {}

// Create routes
// ----------------------------------------------------


router.get("/", function(req, res) {
  res.send('/index');
});

// view all
router.get('/index', function(req, res) {
    hbsObject = {}
    data = ""
    scraper(function(data) {
        //console.log(data)
        var hbsObject = { Items: data }
        res.render('index' ,hbsObject)       
    })
 
})

router.get('/build', function(req, res) {
		data = ""
		buildHeadline(data)

})

  router.get('/scrape', function () {
    console.log('"/scrape" get ')
    buildHeadline.scrapedToDb(function() {
    })
  })




// Export routes
module.exports = router;