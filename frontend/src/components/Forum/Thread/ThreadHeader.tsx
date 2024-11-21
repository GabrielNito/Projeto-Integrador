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
import { Heart } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ThreadType } from "../types";
import { badgeStyles } from "@/utils/global.types";

interface ThreadHeaderProps {
  thread: ThreadType;
  setLikes: Dispatch<SetStateAction<number>>;
}

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
      </CardFooter>
    </Card>
  );
}
