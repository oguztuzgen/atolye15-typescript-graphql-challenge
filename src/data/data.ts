import { NexusGenObjects } from '../../nexus-typegen';

export const posts: NexusGenObjects['Post'][] = [
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

export const comments: NexusGenObjects['Comment'][] = [
  {
    postId: 1,
    content: 'A',
  }
]
