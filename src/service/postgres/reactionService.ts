import { ReactionService } from '../../types/service';

import { NexusGenObjects } from '../../../nexus-typegen';
import { executeQuery } from '../../database/postgres';
import { UserInputError } from 'apollo-server';

export const reactionService: ReactionService = {
  createReaction: async (reaction: NexusGenObjects['Reaction']) => {
    try {
      await executeQuery('BEGIN', []);
      const { rows } = await executeQuery('select "id" from "reaction_types" where "type" = $1;', [
        reaction.reactionType,
      ]);
      const reactionTypeId = rows[0].id;
      const { rows: insertedRows } = await executeQuery('insert into reactions(reaction_type) values ($1) returning id as "reactionId", reaction_type as "reactionType";', [reactionTypeId]);
      const { reactionId } = insertedRows[0];
      await executeQuery('insert into posts_reactions(reaction_id, post_id) values ($1, $2);', [
        reactionId,
        reaction.postId,
      ]);
      return reaction;
    } catch (e) {
      console.log(e);
      throw new UserInputError('createReaction');
    }
  },
  readReaction: async (id: number) => {
    try {
      const { rows } = await executeQuery(
        'select rt.type as "reactionType", p.id as "postId" from "reactions" r inner join "reaction_types" rt on r.reaction_type = rt.id inner join "posts_reactions" pr on r.id = pr.reaction_id inner join "posts" p on p.id = pr.post_id where p.id = $1',
        [id],
      );
      return rows;
    } catch (e) {
      console.log(e);
      throw new UserInputError('readReaction');
    }
  },
  updateReaction: () => {},
  deleteReaction: () => {},
};
