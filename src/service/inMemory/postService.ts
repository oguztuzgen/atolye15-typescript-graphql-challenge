import { PostService } from '../../types/service';

import { posts } from '../../data/data';
import { NexusGenObjects } from '../../../nexus-typegen';

export const postService: PostService = {
  createPost: async (content, parentId?) => {
    const newId = posts.length + 1;
    const newPost: NexusGenObjects['Post'] = {
      content: content,
      parentId: parentId,
      id: newId,
      createdAt: Date.now().toString(),
    };
    posts.push(newPost);
    return newPost;
  },
  readAllRootPosts: async () => {
    return posts.filter((post) => !post.parentId);
  },
  readPost: async (parentId) => {
    return posts.filter((post) => post.parentId === parentId);
  },
  updatePost: () => {},
  deletePost: () => {},
};
