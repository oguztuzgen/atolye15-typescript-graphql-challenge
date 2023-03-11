import { arg, extendType, list, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';
import { posts } from '../data/data';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('content');
    t.nonNull.int('timestamp');
  },
});

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('feed', {
      type: 'Post',
      resolve(parent, args, context, info) {
        // todo db connection
        // return db.fetchAllPosts();
        return posts;
      },
    });
  },
});

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('post', {
      type: 'Post',
      args: {
        content: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { content } = args;
        let newId = posts.length + 1;
        const post = {
          id: newId,
          content: content,
          timestamp: Date.now(),
          comments: [],
        };
        // todo db insert
        posts.push(post);
        return post;
      },
    });
  },
});
