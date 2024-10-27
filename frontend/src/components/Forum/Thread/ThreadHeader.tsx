import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageSquare } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Post {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  threadId: number;
}

interface User {
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

interface Thread {
  id: number;
  title: string;
  likes: number;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
  posts: Post[];
  user: User;
}

interface ThreadHeaderProps {
  thread: Thread;
  setLikes: Dispatch<SetStateAction<number>>;
}

const badgeStyles: { [key: string]: string } = {
  ADMIN: "bg-red-500 hover:bg-red-400 text-white",
  STUDENT: "bg-blue-500 hover:bg-blue-400 text-white",
  MODERATOR: "bg-blue-500 hover:bg-blue-400 text-white",
  USER: "bg-gray-400 hover:bg-gray-300 text-black",
};

export default function ThreadHeader({ thread, setLikes }: ThreadHeaderProps) {
  const handleLike = () => {
    setLikes(thread.likes + 1);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={thread?.user.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {thread?.user.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">{thread?.user.username}</h2>
              <Badge className={`${badgeStyles[thread.user.role]}`}>
                {thread?.user.role}
              </Badge>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            {thread && new Date(thread.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">{thread?.title}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={handleLike}>
          <Heart className="w-4 h-4 mr-2" />
          {thread.likes}
        </Button>
        <Button variant="ghost" size="sm">
          <MessageSquare className="w-4 h-4 mr-2" />
          {thread?.posts.length}
        </Button>
      </CardFooter>
    </Card>
  );
}
