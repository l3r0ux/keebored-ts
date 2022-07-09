export interface Post {
  postId: string;
  userId: string;
  likes: number;
  comments: number;
  hasLiked: boolean;
  imageURLs: string[];
  audioURL: string;
  chassis: string;
  layout: string;
  switches: string;
  mountingStyle: string;
  caseMaterial: string;
  plateMaterial: string;
  mods: string[];
}
