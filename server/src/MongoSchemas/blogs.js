import mongoose from "mongoose";

const BlogsSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "blogs title cant be null"],
  },
  views: {
    type: Number,
    default: "0",
  },
  category: {
    type: String,
    required: [true, "blog category cant be null field"],
  },

  tags: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
    required: [true, "blog image cant be null field"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blogs", BlogsSchema);
