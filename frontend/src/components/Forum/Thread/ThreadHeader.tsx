import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThreadType } from "../types";
import { badgeStyles } from "@/utils/global.types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

interface ThreadHeaderProps {
  thread: ThreadType;
}

export default function ThreadHeader({ thread }: ThreadHeaderProps) {
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
      <CardFooter>
        <Button variant="outline" className="flex items-center gap-1" asChild>
          <Link to={`/forum/${thread.id}/answer`}>
            <MessageCircle className="w-4 h-4" />
            Responder esta Thread
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
