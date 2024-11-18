import { LogOut, Settings, User2, UserX } from "lucide-react";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { roleStyles } from "@/utils/global.types";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

export interface UserType {
  id: number;
  username: string;
  password?: string;
  email: string;
  role: "STUDENT" | "ADMIN";
  createAt?: string;
  updateAt?: string;
  likedPosts?: string;
  likedThreads?: string;
  avatar: string | null;
  badges?: string;
}

const user: UserType = {
  id: 1,
  username: "gabrielnito",
  email: "gabriel.nito@fatec.sp.gov.br",
  role: "STUDENT",
  avatar: null,
};

interface NavbarUserCardProps {
  notLogged?: boolean;
}

export default function NavbarUserCard({ notLogged }: NavbarUserCardProps) {
  if (notLogged) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button size="icon" variant="ghost">
            <User2 className="w-4 h-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarFallback className="bg-destructive/10 text-destructive">
                  <UserX className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold">Usuário não logado</h4>
                <p className="text-sm text-muted-foreground">
                  Faça login para ter acesso aos recursos do site
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-1">
              <Button variant="ghost" className="flex gap-2" asChild>
                <Link to="/login">
                  <User2 className="w-4 h-4" /> Login
                </Link>
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button size="icon" variant="ghost">
          <User2 className="w-4 h-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>GA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold">{user.username}</h4>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <Badge className={`w-fit ${user && roleStyles[user.role]}`}>
                {user?.role}
              </Badge>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-1">
            <Button variant="ghost" className="flex gap-2" asChild>
              <Link to="/dashboard">
                <Settings className="w-4 h-4" /> Configurações
              </Link>
            </Button>
            <Button variant="ghost" className="flex gap-2">
              <LogOut className="w-4 h-4" /> Sair
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
