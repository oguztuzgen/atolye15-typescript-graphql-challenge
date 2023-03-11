import { objectType } from 'nexus';

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.nonNull.int('postId');
    t.nonNull.string('content');
  },
});
