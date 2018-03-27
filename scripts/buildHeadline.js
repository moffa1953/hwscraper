var scraper = require('../scripts/scraper.js')
var Headline = require('../models/Headline.js');
var async = require('async');


module.exports = {
  scrapedToDb : function (cb) {
    // Function in scrape.js to get info from the requested page and return in 
    // in the callback.
    scraper(function(data) {
      // looping through the data array with async.
      console.log(data);
    })
  }
}
// data = ""
// //buildHeadline(data)

// function buildHeadline(callback) {

//     // Function in scrape.js to get info from the requested page and return in 
//     // in the callback.
//     scraper(function(data) {
//       // looping through the data array with async.
//       console.log(data)
//       async.each(data, function(headline){
        
//         // Inserting the artist object into the database as a new collection.
//         Headline.create(headline)
//       })
//     })
//   }

// module.exports = buildHeadline