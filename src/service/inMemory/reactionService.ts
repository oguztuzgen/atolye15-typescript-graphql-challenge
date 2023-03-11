import { ReactionService } from '../../types/service';

import { reactions } from '../../data/data';
import { NexusGenObjects } from '../../../nexus-typegen';

export const reactionService: ReactionService = {
  createReaction: async (reaction: NexusGenObjects['Reaction']) => {
    reactions.push(reaction);
    return reaction;
  },
  readReaction: async (id: number) => {
    return reactions.filter((reaction) => reaction.postId === id);
  },
  updateReaction: () => {},
  deleteReaction: () => {},
};
