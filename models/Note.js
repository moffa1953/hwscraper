var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  link: String,
  title: String,
  saved: false,
  //the following is a unique id for the story
  articleID: String
});

// This creates our model from the above schema, using mongoose's model method

Note = mongoose.model("Note", NoteSchema);

module.exports = Note;