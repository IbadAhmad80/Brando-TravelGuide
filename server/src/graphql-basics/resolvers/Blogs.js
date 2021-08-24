import { Comments } from "../../MongoSchemas";

const Blogs = {
  comments({ id }) {
    return Comments.find({ postID: id });
  },
};

export { Blogs as default };
