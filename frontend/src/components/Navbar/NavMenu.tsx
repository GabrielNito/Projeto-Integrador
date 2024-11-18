"use client";

import { Link } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import NavbarNotifications from "./NavbarNotifications";
import { LucideIcon, User2 } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const sections = [
  {
    title: "Sobre o curso",
    description:
      "Esta seção contém informações sobre o curso e o que ele oferece.",
    action: "/",
  },
  {
    title: "Certificações e Diplomas",
    description:
      "Veja as certificações e diplomas que você pode obter ao concluir o curso.",
    action: "/certificacoes-e-diplomas",
  },
  {
    title: "Contato",
    description:
      "Entre em contato conosco para mais informações sobre o curso.",
    action: "/contato",
  },
];

interface Notification {
  title: string;
  description: string;
  action?: string;
  icon: LucideIcon;
}

interface NavMenuProps {
  variant?: "default" | "mobile";
  notifications: Notification[];
  logged: boolean;
}

export function NavMenu({
  variant,
  notifications,
  logged: userLogged,
}: NavMenuProps) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2">
          <Link to="/">
            <Button variant="ghost">O Curso</Button>
          </Link>
          {sections.map((item, index: number) => {
            return (
              <Link key={index} to={item.action} className="ml-4">
                <Button variant="ghost">{item.title}</Button>
              </Link>
            );
          })}

          <Link to="/forum">
            <Button variant="ghost">Fórum</Button>
          </Link>

          {userLogged && (
            <Link to="/login">
              <Button variant="ghost" className="flex gap-2">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
        <div className="flex flex-col-reverse items-center justify-between w-3/4 gap-2">
          <img src="/logo.png" className="w-1/2" />
          <div className="flex justify-center w-full gap-4">
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User2 className="lg:h-4 lg:w-4" />
              </Button>
            </Link>
            <ModeToggle />
            <NavbarNotifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>O Curso</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col gap-2 w-[400px] p-2">
                {sections.map((item, index: number) => {
                  return (
                    <Link key={index} to={item.action}>
                      <NavigationMenuLink className="flex flex-col w-full gap-1 p-2 rounded-sm cursor-pointer hover:bg-muted">
                        <h1 className="text-sm font-medium leading-none">
                          {item.title}
                        </h1>
                        <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                          {item.description}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  );
                })}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link to="/forum">
        <Button variant="ghost">Fórum</Button>
      </Link>

      {userLogged && (
        <Link to="/login">
          <Button variant="ghost" className="flex gap-2">
            Dashboard
          </Button>
        </Link>
      )}
    </div>
  );
}
