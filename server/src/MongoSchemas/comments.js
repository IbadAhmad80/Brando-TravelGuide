import mongoose from "mongoose";

const CommentsSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, "comments text cant be null field"],
  },

  email: {
    type: String,
    required: [true, "comment email cant be null field"],
  },
  name: {
    type: String,
    required: [true, "comment name cant be null field"],
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "comments post cant be null field"],
  },
});

module.exports = mongoose.model("Comments", CommentsSchema);
