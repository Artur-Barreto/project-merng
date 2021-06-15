const Post = require("../../models/Post");
const checkAuth = require('../../util/check-auth')

module.exports = {
  Query: {
    async Posts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async Post(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not Found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
      async createPost(_, {body}, context) {
        const user = checkAuth(context);
      }
  }
};
