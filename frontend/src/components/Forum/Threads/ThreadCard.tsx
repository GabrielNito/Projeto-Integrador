import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { HeartIcon, MessageCircleIcon, LockIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PostType, UserType } from "../types";
import { badgeStyles } from "@/utils/global.types";
import ThreadCardLike from "./ThreadCardLike";

interface ThreadProps {
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

export default function ThreadCard({ thread }: { thread: ThreadProps }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="w-full bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={thread.user.avatar || undefined}
            alt={thread.user.username}
          />
          <AvatarFallback>
            {thread.user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="w-full flex flex-col max-lg:gap-4">
          <Button
            variant="link"
            className="w-fit text-lg font-semibold max-lg:text-wrap pl-0"
            asChild
          >
            <Link to={`/forum/${thread.id}`}>{thread.title}</Link>
          </Button>

          <div className="w-full flex max-lg:flex-col lg:items-center justify-between gap-2">
            <div className="flex gap-2">
              <span className="text-sm text-muted-foreground">
                {thread.user.username}
              </span>
              <Badge
                className={`w-fit ${
                  thread.user && badgeStyles[thread.user.role]
                }`}
              >
                {thread.user.role}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Criado em {formatDate(thread.createdAt)}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {thread.posts.length > 0 && (
          <div className="space-y-4">
            {thread.posts.slice(0, 2).map((post) => (
              <Link to={`/forum/${thread.id}`} key={post.id} className="block">
                <div className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-sm">{post.content}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <HeartIcon className="h-4 w-4" /> {post.likes}
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
            {thread.posts.length > 2 && (
              <p className="text-sm text-muted-foreground">
                Mais {thread.posts.length - 2}{" "}
                {thread.posts.length - 2 === 1 ? "post" : "posts"}...
              </p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <ThreadCardLike threadId={thread.id} />

          <Button variant="ghost" size="sm" asChild>
            <Link to={`/forum/${thread.id}`}>
              <MessageCircleIcon className="h-4 w-4 mr-2" />
              {thread.posts.length}
            </Link>
          </Button>
        </div>
        {thread.isClosed && (
          <Badge variant="secondary">
            <LockIcon className="h-3 w-3 mr-1" />
            Closed
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
