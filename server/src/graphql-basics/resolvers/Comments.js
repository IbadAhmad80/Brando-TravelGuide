import { Blogs } from "../../MongoSchemas";

const Comments = {
  blog({ postID }) {
    return Blogs.findOne({ _id: postID });
  },
};

export { Comments as default };
