import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { API_URL, PostType, UserDataType } from "../types";
import ThreadPostLoading from "./ThreadPostLoading";
import ThreadPostError from "./ThreadPostError";
import { badgeStyles } from "@/utils/global.types";
import ThreadPostLike from "./ThreadPostLike";

interface Response {
  message: string;
  data: UserDataType;
}

interface ThreadPostProps {
  post: PostType;
}

export default function ThreadPost({ post }: ThreadPostProps) {
  const [user, setUser] = useState<UserDataType>();
  const [error, setError] = useState<string | null>(null);

  async function fetchUser() {
    setError(null);

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
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <ThreadPostLoading />;
  }

  if (error) {
    return <ThreadPostError />;
  }

  if (user)
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
          <ThreadPostLike post={post} />
        </CardFooter>
      </Card>
    );
}
