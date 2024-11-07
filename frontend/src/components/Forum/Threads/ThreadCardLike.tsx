import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { API_URL, ResponseThread } from "../types";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ThreadCardLikeProps {
  threadId: number;
}

export default function ThreadCardLike({ threadId }: ThreadCardLikeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  async function fetchThread() {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/threads/${threadId}`, {
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
    // logic...
    setIsLiked(!isLiked);
  }

  useEffect(() => {
    fetchThread();
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
