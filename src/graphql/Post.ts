import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { postService, reactionService } from '../service';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('content');
    t.nonNull.string('createdAt');
    t.int('parentId');
    t.nonNull.list.nonNull.field('comments', {
      type: 'Post',
      async resolve(parent) {
        return await postService.readPost(parent.id);
      },
    });
    t.nonNull.list.nonNull.field('reactions', {
      type: 'Reaction',
      async resolve(parent) {
        return await reactionService.readReaction(parent.id);
      },
    });
  },
});

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('feed', {
      type: 'Post',
      async resolve() {
        return await postService.readAllRootPosts();
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
      async resolve(parent, args) {
        const { content, parentId } = args;
        return await postService.createPost(content, parentId);
      },
    });
    t.nonNull.field('sendReaction', {
      type: 'Reaction',
      args: {
        reactionType: nonNull(stringArg()),
        postId: nonNull(intArg()),
      },
      async resolve(parent, args) {
        const { reactionType, postId } = args;
        return await reactionService.createReaction({ postId, reactionType });
      }
    })
  },
});
