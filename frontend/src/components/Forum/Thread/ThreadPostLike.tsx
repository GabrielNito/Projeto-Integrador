import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { API_URL, PostType, ResponseThread } from "../types";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  authToken,
  fetchUserToken,
  toggleLike,
  User,
} from "@/components/utils";

interface ThreadCardLikeProps {
  post: PostType;
  likedPosts: string;
}

export default function ThreadPostLike({
  post,
  likedPosts,
}: ThreadCardLikeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const newLikeCount = isLiked ? likes - 1 : likes + 1;

  async function fetchPost() {
    setIsLoading(true);

    setIsLiked(likedPosts.includes(`${post.id}`));

    try {
      const response = await fetch(`${API_URL}/api/posts/${post.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: ResponseThread = await response.json();

      setLikes(result.data.likes);
    } catch (error) {
      setLikes(-1);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLike() {
    await fetch(`${API_URL}/api/posts/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify({
        id: post.id,
        likes: newLikeCount,
      }),
    });

    const userData: User = await fetchUserToken();
    const newUserLikes = toggleLike(userData.dados.likedThreads, post.id);

    await fetch(`${API_URL}/api/users/${userData.dados.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify({
        id: userData.dados.id,
        likedPosts: newUserLikes,
      }),
    });

    setIsLiked(!isLiked);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <Skeleton className="h-8 w-[3.5rem]" />;
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLike}>
      <HeartIcon
        className={`h-4 w-4 mr-2 mt-[1px] ${
          isLiked && "fill-red-500 stroke-red-500"
        }`}
      />
      {likes}
    </Button>
  );
}
