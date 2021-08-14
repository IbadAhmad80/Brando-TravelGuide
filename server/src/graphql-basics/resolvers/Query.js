import { Packages } from "../../MongoSchemas";

const Query = {
  async packages(parent, args, context, info) {
    return Packages.find();
  },
};
//   async posts(parent, args, context, info) {
//     if (!args.query) {
//       return Posts.find().populate("author").populate("comments");
//     } else {
//       const posts = await Posts.find({
//         title: args.query.toLowerCase(),
//       })
//         .populate("author")
//         .populate("comments");

//       if (posts && posts.length > 0) return posts;
//       else throw new Error("posts not found");
//     }
//   },

//   comments(parent, args, { db }, info) {
//     return Comments.find().populate("author").populate("post");
//   },
//   me() {
//     return {
//       id: "123098",
//       name: "Mike",
//       email: "mike@example.com",
//     };
//   },
//   post() {
//     return {
//       id: "092",
//       title: "GraphQL 101",
//       body: "",
//       published: false,
//     };
//   },
// };

export { Query as default };
