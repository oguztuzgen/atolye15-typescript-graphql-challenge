import { PostService } from '../../types/service';

import { executeQuery } from '../../database/postgres';
import { UserInputError } from 'apollo-server';

export const postService: PostService = {
  createPost: async (content, parentId?) => {
    try {
      await executeQuery('insert into posts(content, parentId, createdAt) values ($1, $2, $3);', [
        content,
        parentId || null,
        Date.now(),
      ]);
      return { id: 0, parentId, content, createdAt: Date.now().toString() };
    } catch (e) {
      console.log(e);
      throw new UserInputError('Error when executing createPost');
    }
  },
  readAllRootPosts: async () => {
    try {
      const { rows } = await executeQuery('select id, content, parentId as "parentId", createdAt as "createdAt" from posts where parentId is null', []);
      return rows;
    } catch (e) {
      console.log(e);
      throw new UserInputError('Error when executing readAllRootPosts');
    }
  },
  readPost: async (parentId) => {
    try {
      const { rows } = await executeQuery('select id, content, parentId as "parentId", createdAt as "createdAt" from posts p where p.parentId = $1;', [parentId]);
      return rows;
    } catch (e) {
      console.log(e);
      throw new UserInputError('Error when executing readPost');
    }
  },
  updatePost: () => {},
  deletePost: () => {},
};
