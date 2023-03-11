import { objectType } from 'nexus';

export const Reaction = objectType({
  name: 'Reaction',
  definition(t) {
    t.nonNull.string('reactionType');
    t.nonNull.int('postId');
  },
});
