"use client";

import { Link } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import NavbarNotifications from "./NavbarNotifications";
import { LogOut, LucideIcon, User2 } from "lucide-react";

// const sections = [
//   {
//     title: "Fórum",
//     description: "Acesse nosso fórum.",
//     action: "/forum",
//   },
//   {
//     title: "Criar uma nova Thread",
//     description: "Poste uma nova Thread em nosso fórum.",
//     action: "/forum/create-thread",
//   },
// ];

interface Notification {
  title: string;
  description: string;
  action?: string;
  icon: LucideIcon;
}

interface NavMenuProps {
  variant?: "default" | "mobile";
  notifications?: Notification[];
  logged: boolean;
  admin: boolean;
}

export function NavMenu({
  variant,
  notifications,
  logged: userLogged,
  admin,
}: NavMenuProps) {
  function handleLogout() {
    localStorage.removeItem("auth-token");
    window.location.reload();
  }

  if (variant === "mobile") {
    return (
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2">
          <Link to="/">
            <Button variant="ghost">O Curso</Button>
          </Link>

          <Link to="/certificacoes">
            <Button variant="ghost">Certificações</Button>
          </Link>

          <Link to="/forum">
            <Button variant="ghost">Fórum</Button>
          </Link>
          {admin ? (
            <Link to="/dashboard">
              <Button variant="ghost" className="flex gap-2">
                Dashboard
              </Button>
            </Link>
          ) : userLogged ? (
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <User2 className="lg:h-4 lg:w-4" />
              </Button>
            </Link>
          ) : null}
        </div>
        <div className="flex flex-col-reverse items-center justify-between w-3/4 gap-2">
          <img src="/logo.png" className="w-1/2" />
          <div className="flex justify-center w-full gap-4">
            {userLogged ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLogout()}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User2 className="lg:h-4 lg:w-4" />
                </Button>
              </Link>
            )}
            <ModeToggle />
            {notifications && (
              <NavbarNotifications notifications={notifications} />
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <Link to="/">
        <Button variant="ghost">O Curso</Button>
      </Link>

      <Link to="/certificacoes">
        <Button variant="ghost">Certificações</Button>
      </Link>

      <Link to="/forum">
        <Button variant="ghost">Fórum</Button>
      </Link>
    </div>
  );
}
