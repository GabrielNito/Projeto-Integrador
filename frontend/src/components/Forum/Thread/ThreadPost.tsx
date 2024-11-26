import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PostType, UserDataType } from "../types";
import ThreadPostLoading from "./ThreadPostLoading";
import ThreadPostError from "./ThreadPostError";
import { badgeStyles } from "@/utils/global.types";
import ThreadPostLike from "./ThreadPostLike";
import { API_URL, authToken, fetchUserToken, User } from "@/components/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Response {
  message: string;
  data: UserDataType;
}

interface ThreadPostProps {
  post: PostType;
  variant?: "default" | "dashboard";
}

export default function ThreadPost({ post, variant }: ThreadPostProps) {
  const [user, setUser] = useState<UserDataType>();
  const [error, setError] = useState<string | null>(null);
  const [userLikes, setUserLikes] = useState("");

  async function fetchUser() {
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/users/${post.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
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

    async function fetchLocal() {
      const response: User = await fetchUserToken();

      setUserLikes(response.dados.likedPosts);
    }
    fetchLocal();
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
        <CardFooter className="flex justify-between">
          <ThreadPostLike post={post} likedPosts={userLikes} />
          {variant && (
            <Button variant="outline" asChild>
              <Link to={`/forum/${post.threadId}`}>Ir para a Thread</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    );
}
