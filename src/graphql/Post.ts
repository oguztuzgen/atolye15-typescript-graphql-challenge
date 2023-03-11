import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('content');
    t.nonNull.int('timestamp');
  },
});

let posts: NexusGenObjects['Post'][] = [
  {
    id: 1,
    content: 'Fullstack tutorial for GraphQL',
    timestamp: 1678522645,
  },
  {
    id: 2,
    content: 'GraphQL official website',
    timestamp: 1678522645,
  },
];

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('feed', {
      type: 'Post',
      resolve(parent, args, context, info) {
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
      }
    });
  },
});
