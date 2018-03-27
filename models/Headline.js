var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({

  caption: {
    type: String
  },
  title: {
  	type: String
  },
  image: {
    type: String
  },
  saved: {
  	type: Boolean
  },
  articleID: {
  	type: String
  }
});

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;