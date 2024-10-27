import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Notification {
  userId: number;
  notificationId: number;
}

interface Post {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  threadId: number;
}

interface Thread {
  id: number;
  title: string;
  likes: number;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

interface Visit {
  id: number;
  exitedAt: string | null;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

interface UserData {
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
  allowedNotifications: Notification[];
  createdPosts: Post[];
  createdThreads: Thread[];
  visits: Visit[];
}

interface Response {
  message: string;
  data: UserData;
}

const API_URL = import.meta.env.VITE_FETCH_URL || "http://localhost:3001";

interface Post {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  threadId: number;
}

interface ThreadPostProps {
  post: Post;
}

const badgeStyles: { [key: string]: string } = {
  ADMIN: "bg-red-500 hover:bg-red-400 text-white",
  STUDENT: "bg-blue-500 hover:bg-blue-400 text-white",
  MODERATOR: "bg-blue-500 hover:bg-blue-400 text-white",
  USER: "bg-gray-400 hover:bg-gray-300 text-black",
};

export default function ThreadPost({ post }: ThreadPostProps) {
  const [user, setUser] = useState<UserData>();

  async function fetchUser() {
    // setIsLoading(true);
    // setError(null);

    try {
      const response = await fetch(`${API_URL}/api/users/${post.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: Response = await response.json();

      setUser(result.data);
    } catch (error) {
      //   setError(
      //     error instanceof Error ? error.message : "An unknown error occurred"
      //   );
    } finally {
      //   setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Card key={post.id} className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback>
                {user?.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">{user?.username}</h3>
              <Badge className={`w-fit ${user && badgeStyles[user.role]}`}>
                {user?.role}
              </Badge>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">
          <Heart className="w-4 h-4 mr-2" />
          {post.likes}
        </Button>
      </CardFooter>
    </Card>
  );
}
