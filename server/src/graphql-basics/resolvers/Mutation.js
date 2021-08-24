import { Blogs, Comments } from "../../MongoSchemas";

const Mutation = {
  async updateBlogViews(_, { id }) {
    await Blogs.updateOne({ _id: id }, { $inc: { views: 1 } });
    return Blogs.findOne({ _id: id });
  },
  async createComment(_, { data: { email, postID, text, name } }, { pubsub }) {
    const newComment = await new Comments({ text, email, postID, name }).save();

    pubsub.publish(`comment ${postID}`, {
      comment: newComment,
    });

    return newComment;
  },
};

export { Mutation as default };
