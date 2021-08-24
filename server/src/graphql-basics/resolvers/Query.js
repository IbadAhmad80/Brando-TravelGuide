import { Blogs, Comments, Packages } from "../../MongoSchemas";

const Query = {
  packages() {
    return Packages.find();
  },
  async getComments(_, { blogID }) {
    const comments = await Comments.find({ postID: blogID });
    return { blogID, comments };
  },

  async blogs(_, { data }) {
    if (data.default) {
      return Blogs.find({});
    } else if (data.title) {
      //getting blog by title
      return Blogs.find({ title: data.title.toLowerCase() });
    } else if (data.category) {
      //getting blogs by category
      if (data.category === "Uncategorized") return Blogs.find({});
      else return Blogs.find({ category: data.category.toLowerCase() });
    } else if (data.tag) {
      //getting blogs by tag
      return Blogs.find({ tags: data.tag.toLowerCase() });
    } else if (data.views) {
      //getting blogs accroding to heigher views
      return Blogs.find().sort({ views: -1 }).limit(5);
    } else if (data.date) {
      //getting blogs accroding to their dates
      return Blogs.find().sort({ date: -1 }).limit(5);
    } else if (data.month) {
      //getting blogs accroding to their dates

      let blogs = await Blogs.find().sort({});
      return blogs.filter(({ date }) => {
        return (
          new Date(date)
            .toLocaleString("en-US", { month: "long" })
            .toLowerCase() === data.month.toLowerCase()
        );
      });
    }
  },
};

export { Query as default };
