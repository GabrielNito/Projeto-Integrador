import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
// import { ExitIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../ModeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { HomeIcon, LogOut } from "lucide-react";

interface SidebarFooterProps {
  expanded: boolean;
  avatar: string;
  username: string;
  name: string;
  email: string;
}

export default function SidebarFooter({
  expanded,
  avatar,
  username,
  name,
  email,
}: SidebarFooterProps) {
  function handleLogout() {
    localStorage.removeItem("auth-token");
    window.location.href = "/";
  }

  return (
    <div className="absolute left-0 right-0 flex flex-col items-center justify-center gap-2 px-3 bottom-4">
      <div
        className={cn(
          "flex w-full items-center gap-3 rounded-lg bg-secondary px-3 py-2",
          !expanded && "hidden"
        )}
      >
        <Avatar className={cn("h-16 w-16", !expanded && "hidden")}>
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div
          className={cn(
            "flex flex-col overflow-hidden transition-all duration-300",
            expanded ? "w-full opacity-100" : "w-0 opacity-0"
          )}
        >
          <span className="text-sm font-medium">{name}</span>
          <span className="text-xs truncate text-muted-foreground">
            {email}
          </span>
        </div>
      </div>
      <Separator className={cn("mt-2", !expanded && "hidden")} />
      <div
        className={cn(
          "flex justify-between items-center gap-2",
          !expanded && "hidden"
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
              >
                <HomeIcon className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-muted text-foreground">
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLogout()}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-muted text-foreground">
              <p>Sair</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <ModeToggle />
      </div>
    </div>
  );
}
