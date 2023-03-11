import { NexusGenObjects } from "../../nexus-typegen";

export interface PostService {
  createPost: (content: string, parentId?: number | null) => NexusGenObjects['Post'];
  readAllRootPosts: () => NexusGenObjects['Post'][];
  readPost: (parentId: number) => NexusGenObjects['Post'][];
  updatePost: Function;
  deletePost: Function;
}

export interface ReactionService {
  createReaction: (reaction: NexusGenObjects['Reaction']) => NexusGenObjects['Reaction'];
  readReaction: (id: number) => NexusGenObjects['Reaction'][];
  updateReaction: Function;
  deleteReaction: Function;
}
