import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LockIcon, Trash2Icon } from "lucide-react";
import { PostType, UserType } from "@/components/Forum/types";
import { Link } from "react-router-dom";
import { badgeStyles } from "@/utils/global.types";

interface Thread {
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

interface DashboardThreadCardProps {
  thread: Thread;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function DashboardThreadCard({
  thread,
}: DashboardThreadCardProps) {
  return (
    <Card className="w-full bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={thread.user.avatar || undefined}
            alt={thread.user.username}
          />
          <AvatarFallback>
            {thread.user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col w-full max-lg:gap-4">
          <Button
            variant="link"
            className="pl-0 text-lg font-semibold w-fit max-lg:text-wrap"
            asChild
          >
            <Link to={`/forum/${thread.id}`}>{thread.title}</Link>
          </Button>

          <div className="flex justify-between w-full gap-2 max-lg:flex-col lg:items-center">
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
                <div className="p-4 transition-colors rounded-lg bg-muted hover:bg-muted/80">
                  <p className="text-sm">{post.content}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Trash2Icon className="w-4 h-4 mr-2" />
                Deletar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso excluirá permanentemente
                  a thread e todos os seus posts associados.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Deletar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {thread.isClosed && (
          <Badge variant="secondary">
            <LockIcon className="w-3 h-3 mr-1" />
            Closed
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}