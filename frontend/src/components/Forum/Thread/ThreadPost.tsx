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
import { API_URL, PostType, UserDataType } from "../types";
import ThreadPostLoading from "./ThreadPostLoading";
import ThreadPostError from "./ThreadPostError";
import { badgeStyles } from "@/utils/global.types";

interface Response {
  message: string;
  data: UserDataType;
}

interface ThreadPostProps {
  post: PostType;
}

export default function ThreadPost({ post }: ThreadPostProps) {
  const [user, setUser] = useState<UserDataType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchUser() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/users/${post.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: Response = await response.json();

      setTimeout(() => {
        setUser(result.data);
      }, 3000);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <ThreadPostLoading />;
  }

  if (error) {
    return <ThreadPostError />;
  }

  return (
    <Card className="w-full">
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
