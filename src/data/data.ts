import { NexusGenObjects } from '../../nexus-typegen';

export const posts: NexusGenObjects['Post'][] = [
  {
    id: 1,
    content: 'Fullstack tutorial for GraphQL',
    createdAt: '1678522645',
    parentId: null,
  },
  {
    id: 2,
    content: 'GraphQL official website',
    createdAt: '1678522645',
    parentId: 1,
  },
];

export const reactions: NexusGenObjects['Reaction'][] = [
  {
    postId: 2,
    reactionType: 'THUMBS_UP',
  },
];
