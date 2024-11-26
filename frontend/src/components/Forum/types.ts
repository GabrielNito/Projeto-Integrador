export interface PostType {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  threadId: number;
}

export interface UserType {
  id: number;
  username: string;
  password: string;
  email: string;
  role: "STUDENT" | "ADMIN";
  createAt: string;
  updateAt: string;
  likedPosts: string;
  likedThreads: string;
  avatar: string | null;
  badges: string;
}

export interface ThreadType {
  id: number;
  title: string;
  likes: number;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
  posts: PostType[];
  user: UserType;
}

export interface NotificationType {
  userId: number;
  notificationId: number;
}

export interface VisitType {
  id: number;
  exitedAt: string | null;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface UserDataType {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  createAt: string;
  updateAt: string;
  likedPosts: string;
  likedThreads: string;
  avatar: string | null;
  badges: string;
  allowedNotifications: NotificationType[];
  createdPosts: PostType[];
  createdThreads: ThreadType[];
  visits: VisitType[];
}

export interface ResponseThreads {
  data: ThreadType[];
  message: string;
}

export interface ResponseThread {
  data: ThreadType;
  message: string;
}
