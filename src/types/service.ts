import { NexusGenObjects } from "../../nexus-typegen";

export interface PostService {
  createPost: (content: string, parentId?: number | null) => Promise<NexusGenObjects['Post']>;
  readAllRootPosts: () => Promise<NexusGenObjects['Post'][]>;
  readPost: (parentId: number) => Promise<NexusGenObjects['Post'][]>;
  updatePost: Function;
  deletePost: Function;
}

export interface ReactionService {
  createReaction: (reaction: NexusGenObjects['Reaction']) => Promise<NexusGenObjects['Reaction']>;
  readReaction: (id: number) => Promise<NexusGenObjects['Reaction'][]>;
  updateReaction: Function;
  deleteReaction: Function;
}
