import mongoose from "mongoose";

const PackagesSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "package title cant be null"],
  },
  description: {
    type: String,
    required: [true, "package description cant be null field"],
  },
  detail: {
    type: String,
    required: [true, "package details cant be null field"],
  },

  category: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
    required: [true, "package image cant be null field"],
  },
});

module.exports = mongoose.model("Packages", PackagesSchema);
