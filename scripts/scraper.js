
var cheerio = require('cheerio');
var request = require("request");

var db = require('../models');

      //var db = require('../models').Headline
results = []
var htmlcode = ""
    module.exports = function(callback) {

          request("https://www.amny.com", function(error, response, htmlcode) {

            var $ = cheerio.load(htmlcode);

                $(".span2").each(function(i, element) {

                        var idNo = element.attribs.id

                        var image = $(this).find('.openPopupLink img').attr('src');

                        var caption = $(this).find('.caption').text()
                        caption = caption.replace(/[ {2}\'\t\n\r]/gm,' ');
                        caption = caption.replace(/^\s+/g, "")
                        captionstr = caption.split(' ')
                        caption = captionstr[0]+" "+captionstr[1]+" "+captionstr[2]
                   
                        var title = $(element).find('.openPopupLink').text()
                        title = title.replace(/[ {2}\'\t\n\r]/gm,' ');
                        title = title.replace(/^\s+/g, "")

                        var newheadline = new db.Headline({
                              caption: caption,
                              title: title,
                              image: image,
                              saved: false,
                              articeID: idNo                          
                        })      

                        if((image != "") && (title != 'More >>') && (title != '') ){

                          console.log("---------- printing db info");
                          //console.log(db);
                          
                          //console.log(db.Headline);
                          //console.log(newheadline);

                          // db.Headlines.insert (
                          //   {
                          db.Headline.create(newheadline)
                            .then(function(dbHeadline) {
                              // View the added result in the console
                              console.log(dbHeadline);
                            })
                            .catch(function(err) {
                              console.log(err.message)
                              //return res.json(err);
                            });


                            console.log('-----------------'+newheadline)
                            results.push(newheadline)
                        
                      callback(results)

                }
          })
              })
    }
