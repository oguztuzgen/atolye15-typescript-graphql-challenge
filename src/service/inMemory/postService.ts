import { PostService } from '../../types/service';

import { posts } from '../../data/data';
import { NexusGenObjects } from '../../../nexus-typegen';

export const postService: PostService = {
  createPost: (content, parentId?) => {
    const newId = posts.length + 1;
    const newPost: NexusGenObjects['Post'] = {
      content: content,
      parentId: parentId,
      id: newId,
      timestamp: Date.now(),
    };
    posts.push(newPost);
    return newPost;
  },
  readAllRootPosts: () => {
    return posts.filter((post) => !post.parentId);
  },
  readPost: (parentId) => {
    return posts.filter((post) => post.parentId === parentId);
  },
  updatePost: () => {},
  deletePost: () => {},
};
