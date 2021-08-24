import { Blogs } from "../../MongoSchemas";

const Subscription = {
  comment: {
    async subscribe(parent, { postId }, { pubsub }, info) {
      const post = await Blogs.findOne({ _id: postId });

      if (!post) {
        throw new Error("Post not found");
      }

      return pubsub.asyncIterator(`comment ${postId}`);
    },
  },
};

export { Subscription as default };
