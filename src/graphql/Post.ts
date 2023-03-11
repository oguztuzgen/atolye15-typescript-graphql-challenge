import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { postService, reactionService } from '../service';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('content');
    t.nonNull.int('createdAt');
    t.int('parentId');
    t.nonNull.list.nonNull.field('comments', {
      type: 'Post',
      resolve(parent, args, context, info) {
        return postService.readPost(parent.id);
      }
    });
    t.nonNull.list.nonNull.field('reactions', {
      type: 'Reaction',
      resolve(parent, args, context) {
        return reactionService.readReaction(parent.id);
      }
    })
  },
});

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('feed', {
      type: 'Post',
      resolve(parent, args, context, info) {
        return postService.readAllRootPosts();
      },
    });
  },
});

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('sendPost', {
      type: 'Post',
      args: {
        content: nonNull(stringArg()),
        parentId: intArg(),
      },
      resolve(parent, args, context) {
        const { content, parentId } = args;
        return postService.createPost(content, parentId);
      },
    });
  },
});
