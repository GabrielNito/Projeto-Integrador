"use client";

import { LogOut, Settings, User2, UserX } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { badgeStyles } from "@/utils/global.types";
import { useEffect, useState } from "react";
import { fetchUserToken, type UserData } from "../utils";

export default function NavbarUserCard() {
  const [user, setUser] = useState<UserData | null>(null);

  function handleLogout() {
    localStorage.removeItem("auth-token");
    window.location.reload();
  }

  async function fetchUser(): Promise<any | null> {
    const data = await fetchUserToken();
    setUser(data.dados);
    if (!data) return null;
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost">
            <User2 className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          avoidCollisions={true}
          collisionPadding={16}
        >
          <div className="flex justify-between space-x-2 px-2 py-1.5">
            <div className="flex flex-col gap-2">
              <Avatar>
                <AvatarFallback>
                  {user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold">{user.username}</h4>
                <Badge
                  className={`w-fit text-[.65rem] p-1.5 py-[.125rem] ${
                    user && badgeStyles[user.role]
                  }`}
                >
                  {user?.role}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Settings className="w-4 h-4" /> Configurações
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <User2 className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        avoidCollisions={true}
        collisionPadding={16}
      >
        <div className="flex justify-between space-x-4 px-2 py-1.5">
          <Avatar>
            <AvatarFallback className="bg-destructive/20 dark:bg-red-900/50 text-destructive">
              <UserX className="w-4 h-4 dark:stroke-red-500" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">Usuário não logado</h4>
            <p className="text-sm text-muted-foreground">
              Faça login para ter acesso aos recursos do site
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link to="/login" className="flex items-center gap-2 cursor-pointer">
            <User2 className="w-4 h-4" /> Fazer Login
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
